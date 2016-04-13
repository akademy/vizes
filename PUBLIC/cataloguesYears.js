/**
 * Created by matthew on 05/12/2015.
 */

(function createChart() {
	var mode = "years";

	var dataPostgres = catalogueCountsAndDates;
	/*
	var data = [];
	for( var i=0; i<dataPostgres.length;i++) {
		var catalogue = {
			name : dataPostgres[i][0],
			count : dataPostgres[i][1],
			year : {
				start: dataPostgres[i][2],
				end: dataPostgres[i][3]
			},
			originalPosition : i
		};
		data.push(catalogue);
	}
	*/

	dataPostgres = catalogueYearsCount;

	var dataTemp = {},
		dummyYear = 1490;

	for( var i=0; i < dataPostgres.length; i++ ) {
		var yearData = dataPostgres[i];
		var catName = yearData["Catalogue"];

		if( ! (catName in dataTemp) ) {
			dataTemp[catName] = {
				"start" : 2000,
				"end" : 0
			};
		}

		if( yearData.year == 0 ) {
			yearData.year = dummyYear; // A crafty cheat for entries without years.
		}

		dataTemp[catName][yearData.year] = yearData.number;

		if( yearData.year < dataTemp[catName]["start"]) {
			dataTemp[catName]["start"] = yearData.year;
		}
		if( yearData.year > dataTemp[catName]["end"]) {
			dataTemp[catName]["end"] = yearData.year;
		}
	}

	var data = [];
	var catalogues = Object.keys(dataTemp);
	var maxYearNumber = 0;
	for( i=0; i < catalogues.length; i++ ) {
		var catName = catalogues[i],
			start = dataTemp[catName]["start"],
			end = dataTemp[catName]["end"],
			count = 0, number,
			years = [], y;


		for( y=start; y<=end; y++ ) {
			number = 0;
			if( y in dataTemp[catName] ) {
				number = dataTemp[catName][y]
			}
			else {
				number = 0;
			}

			years.push( {
				"year" : y,
				"number" : number
			} );
			count += number;

			if( y !== dummyYear && number > maxYearNumber ) {
				maxYearNumber = number;
			}
		}

		data.push( {
			"name": catName,
			"count" : count,
			"years": years,
			year : {
				"start": start,
				"end": end
			}
		});


	}

	dataTemp = null;
	console.log(data);

	var chart = d3.select(".chart");

	// Set some defaults
	var svgWidth = 1200,
		svgHeight = 2000;

	//var svgWidth = screen.availWidth,
	//	svgHeight = screen.availHeight - 200; //chart.y;

	var chartX = 250,
		chartY = 20,
		chartHeight = svgHeight - chartY - 50,
		chartWidth = svgWidth - chartX - 50;

	var defaultStartYear = 1500,
		defaultEndYear = 1850;



	// Select svg

	chart.attr("width", svgWidth)
		.attr("height", svgHeight);

	// Get max/mon counts
	var maxCount = d3.max(data, function(d) { return d.count; }),
		minCount = d3.min(data, function(d) { return d.count; }),
		startYear= d3.min(data, function(d) { return d.year.start; }),
		endYear= d3.max(data, function(d) { return d.year.end; }),
		chartStartYear = startYear - 10,
		chartEndYear = endYear + 20;
		
	var barHeight = chartHeight / data.length;

	// generate xscale range
	var xScale = d3.scale.linear()
		.range([chartX,chartWidth+chartX]);

	var sizeScale = d3.scale.log()
		.range([1,10,barHeight/2])
		.domain([1,100,maxYearNumber]);

	var gData, xAxisBottom;


	var idFunction = function(d) { return d.name + d.originalPosition ; };
	var excluded = function(d) { return exclude.indexOf( d.name ) !== -1; };

	var getDataCount = function(d) { return excluded(d) ? 0 : d.count; };
	var getDataYearStart = function(d) { return excluded(d) ? 10000 : d.year.start; };
	var getDataYearEnd = function(d) { return excluded(d) ? 0 : d.year.end; };


	// Set the order to start with
	orderBy("nameAsc");
	
	xScale.domain([0, maxCount]);

	chart.append( "g" ).attr("class","guidelines");
	
	// Attach data (and create) g areas, which we transform into position
	gData = chart.selectAll("g.data")
		.data(data, idFunction )
		.enter()
			.append("g")
				.attr("class","data")
				.attr("transform", function(d, i) {
					return "translate(0," + ((i * barHeight) + chartY) + ")";
				})
	;

	// Attach rectangles to g.bar and a href tags - but initially width is zero so bars "generate" later.
	/*gData
		.append("rect")
			.attr("x", xScale(0) )
			.attr("style", function(d,i) { return "fill:" + fillColour.brighter((data.length-i)/15).toString(); } )
			.attr("width", 0 )
			.attr("height", barHeight - 1)
			//.append("a")
			//.attr("xlink:href","http://www.example.com")
			.on("mouseover", function(d,i) {return d3.select("div.tooltip:nth-child("+(i+1)+")").style("visibility", "visible");})
			.on("mousemove", function(d,i){return d3.select("div.tooltip:nth-child("+(i+1)+")").style("top",
				(d3.event.pageY-20)+"px").style("left",(d3.event.pageX+20)+"px");})
			.on("mouseout", function(d,i){return d3.select("div.tooltip:nth-child("+(i+1)+")").style("visibility", "hidden");})
			;
	*/
	var overCircle = false;

	var fillColour=d3.rgb("#2E527E"),
		colorScale = d3.scale.log()
			.range([1.9,0.1])
			.domain([1,maxYearNumber] );

	xScale.domain([chartStartYear, chartEndYear ]);
	gData.append("g").selectAll("circle")
		.data(function (d) {
			return d.years.filter( function(o) { return o.number != 0; } );
		},function(d) {
			return d.year;
		})
		.enter()
		.append("circle")
			.attr("cx", function (d) { return xScale(d.year); } )
			.attr("cy",barHeight/2)
			.attr("r",function (d) {
				return 0;//sizeScale(d.number);
			} )
			.attr("style", function(d) { return "fill:" + fillColour.brighter(colorScale(d.number)).toString(); } )

			.on("mouseover", function(d) {
				var year = (d.year === dummyYear) ? "Undated" : d.year;
				overCircle = true;
				tooltip.text( year + " | " + d.number + " letters" );
			})
			.on("mouseout", function() {
				overCircle = false;
			})

			//.append("title")
			//	.text( function(d) { return d.year + " | " + d.number + " letters"; } )
	;

	// Attach name of catalogue
	var exclude = [];
	gData.append("text")
		.text(function(d) {
			return d.name + " ☑";
		})
		.attr("y", barHeight/2)
		.attr("x", function() {
			return chartX - this.getBBox().width - 10;//return chartX - 250;
		})
		.on("click",function(d) {
			var d3This = d3.select(this)
			var i = exclude.indexOf(d.name);
			if( i === -1 ) {
				exclude.push(d.name);
				d3This.text(d.name + " ☒");
			}
			else {
				exclude.splice(i,1);
				d3This.text(d.name + " ☑");
			}

			d3This.classed("excluded",i === -1);
			update();
		})

	/*gData.select("text")
		.attr("x", function() {
			return chartX - this.getBBox().width - 10;
		})*/
;

	//////////////

	// Create horizontal axis...
	xAxisBottom = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
		.tickFormat( d3.format("g") );

	xAxisTop = d3.svg.axis()
		.scale(xScale)
		.orient("top")
		.tickFormat( d3.format("g") );

	// ...Draw the x-axis
	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0,"+ (chartHeight + chartY) + ")")
		.call(xAxisBottom);

	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + chartY + ")")
		.call(xAxisTop);

	//////////////////

	// Add a hover over text
	/*d3.select("body")
			.append("div")
			.selectAll("div.tooltip")
			.data(data, idFunction )
				.enter()
				.append("div")
					.attr("class","tooltip")
					.style("position", "absolute")
					.style("z-index", "10")
					.style("visibility", "hidden")
					.html(function (d) {
						return "<strong>" + d.name + "</strong><br/>" +
							d.count + " letters.<br/>" +
							"From " + d.year.start + " to " + d.year.end;
					})
		;
	*/


	var tooltip = d3.select("body")
		.append("div")
		.classed("tooltip",1)
		.text("");

	var guidelines;
	chart.on("mouseover", function() {
			return tooltip.style("visibility", "visible");
		})
		.on("mousemove", function() {
			var pos = d3.mouse(chart.node());

			if( pos[0] > chartX && pos[1] > chartY && pos[0] < chartX + chartWidth && pos[1] < chartY + chartHeight ) {

				var minX = xScale( 1500 );

				if( !overCircle ) {
					if( pos[0] > minX ) {
						tooltip.text(Math.floor(xScale.invert(pos[0])));
						tooltip.style("visibility", "visible");
					}
					else {
						tooltip.style("visibility", "hidden");
					}
				}

				var limitX = Math.max( pos[0], minX );

				chart.select("g.guidelines line.mouse")
					.attr("x1", limitX )
					.attr("x2", limitX )
			}
			else {
				tooltip.text("");
				chart.select("g.guidelines line.mouse")
					.attr("x1", -5 )
					.attr("x2", -5 )

			}
			
			return tooltip.style("top",(d3.event.pageY-40)+"px").style("left",(d3.event.pageX+10)+"px");
		})
		.on("mouseout", function() {
			return tooltip.style("visibility", "hidden");
		});

	function generateSort( memberFunction, ascending ) {
		/* Generate a sort function with particular features */
		return function(a,b) {
			var compare = ((memberFunction(a) < memberFunction(b)) ? -1 : memberFunction(a) > memberFunction(b));
			if(compare===0) {
				compare = ( (a.name < b.name) ? -1 : a.name > b.name );
			}
			return (ascending) ? compare : compare*-1;
		};
	}
	
	function orderBy( by ) {
		/* Change the order of "data". */
		if( by === "nameAsc" ) {
			data.sort( generateSort( function(o) {return o.name;}, true ) );
		}
		else if( by === "nameDesc" ) {
			data.sort( generateSort( function(o) {return o.name;} ) );
		}
		else if( by === "yearStartAsc" ) {
			data.sort( generateSort( function(o) {return o.year.start;}, true ) );
		}
		else if( by === "yearStartDesc" ) {
			data.sort( generateSort( function(o) {return o.year.start;} ) );
		}
		else if( by === "yearEndAsc" ) {
			data.sort( generateSort( function(o) {return o.year.end;}, true ) );
		}
		else if( by === "yearEndDesc" ) {
			data.sort( generateSort( function(o) {return o.year.end;} ) );
		}
		else if( by === "countAsc" ) {
			data.sort( generateSort( function(o) {return o.count;}, true ) );
		}
		else {
			data.sort( generateSort( function(o) {return o.count;} ) );
		}
	}
	
	function order( value ) {
		/* reorder bars on chart */
		orderBy( value );
		
		chart.selectAll("g.data")
			.data(data, idFunction )
			// Update bars...
			.transition()
			.delay( 0 )
			.duration(1000)
			.attr("transform", function(d, i) {
				return "translate(0," + ((i * barHeight) + chartY) + ")";
			})
		;
			//.enter()
			// Add new bars...
			//.attr("transform", function(d, i) {
			//	return "translate(0," + i * barHeight + ")";
			//})
			//.exit()
			// Remove old bars...
			//.remove();
	}
	
	function update() {
		/* Update to the correct chart, years or counts */
		
		var title = "";

		if ( mode === "years") {

			title = "Year coverage of letters in catalogues";

			/*var xDomainMin = d3.min(data, function(d) {
					if( excluded(d) ) {
						return 10000;
					}
					return getDataYearStart(d);
				}),
				xDomainMax = d3.max(data, function(d) {
					if( excluded(d) ) {
						return 0;
					}
					return getDataYearEnd(d);
				});

			xScale.domain([xDomainMin-10, xDomainMax+20 ]);*/
			xScale.domain([chartStartYear, chartEndYear ]);

			// Use a log scale to show count as height of event box
			var barHeightScale = d3.scale.log()
				.range([5,barHeight-5])
				.domain([minCount,maxCount]);

			// Update rect position to show years
			gData.select("rect")
				.transition()
				.duration(500)
				.attr("x", function(d) {
					return xScale(d.year.start);
				})
				.attr("width", function(d) {
					if( excluded(d)) {
						return xScale(0);
					}
					return xScale(d.year.end - d.year.start) - xScale(0);
				})
				.attr("y", function(d) {
					return 5;//(barHeight - barHeightScale(d.count))/2;
				} )
				.attr("height", function(d) {
					return barHeight - 5; //barHeightScale(d.count);
				});

			gData.select("g").selectAll("circle")
				.transition()
				.delay(function(d) { return (d.year - chartStartYear) * 3;})
				.duration(1000)
				//.attr("cx", function (d) { return xScale(d.year); } )
				//.attr("cy",barHeight/2)
				.attr("r",function (d) {
					if( d.year == dummyYear ) {
						return Math.min( sizeScale(d.number), 20 );
					}
					return sizeScale(d.number);
				} )

			;

			// Redraw x-axis with years
			chart.select(".x.axis")
				.transition()
				.duration(500)
				.call(xAxisBottom);

			var xAxisTicks = xScale.ticks();

			// Create some guidelines so we can see where years come in.
			guidelines = chart.select("g.guidelines").selectAll( "line.guideline" )
				.data( xAxisTicks );

			guidelines.enter().append( "line" )
				.classed("guideline", 1 )
				.attr("x1", function(d) { return xScale(d); } )
				.attr("x2", function(d) { return xScale(d); } )
				.attr("y1", chartY )
				.attr("y2", chartY + chartHeight );

			chart.select("g.guidelines").append("line")
				.classed("mouse",1)
				.attr("x1", -1 )
				.attr("x2", -1 )
				.attr("y1", chartY )
				.attr("y2", chartY + chartHeight );


			xAxisBottom.tickFormat( d3.format(",g") );
		}
		else if ( mode === "chart") {

			title = "Number of letters in catalogue.";

			xScale.domain([0, d3.max(data, getDataCount )]);

			gData.select("rect")
				.transition()
				.duration(500)
				.attr("x", xScale(0) )
				.attr("width", function(d) {
					return xScale(getDataCount(d)) - xScale(0);
				})
				.attr("y", 0)
				.attr("height", barHeight - 1);

			chart.select(".x.axis")
				.transition()
				.duration(500)
				.call(xAxisBottom);

			chart.select("g.guidelines").selectAll( "line.guideline" )
				.data( [] )
				.exit().remove();

			xAxisBottom.tickFormat( d3.format("g") );
		}

		d3.select("#title").text(title);

	}


	// Update the chart on load, this makes the first bars "appear".
	setTimeout( function() {
		update("chart");
	}, 100 );


	// detect changes in radio buttons
	d3.selectAll(".mode input").on("change", function() {
		mode = this.value;
		update();
	});
	d3.selectAll(".sort input").on("change", function() {
		order( this.value );
	});

})();
