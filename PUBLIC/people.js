/**
 * Created by matthew on 05/12/2015.
 */

(function createChart() {
	var mode = "years";

	var dataSolr = peopleBornDied;
	var docs = dataSolr.response.result.doc;
	var data = [];

	for( var i=0; i<docs.length;i++) {
		var doc = docs[i];
		var start = 0;
		var end = 0;
		if( doc.int && doc.int.length ) {
			start = doc["int"][0]["#text"] * 1;
			end = doc["int"][1]["#text"] * 1;
		}

		if( start === 0 ) {
			start = end;
		}
		if( end === 0 ) {
			end = start;
		}
		if( start === 0 ) {
			start = end = 1650;
		}

		var catalogue = {
			name : docs[i]["str"][1]["#text"],
			count : 0,
			year : {
				start: start,
				end: end
			}
		};
		data.push(catalogue);
	}

	// Set some defaults
	var svgWidth = 1000,
		svgHeight = 100000;

	var chartX = 250,
		chartY = 10,
		chartHeight = svgHeight - chartY - 50,
		chartWidth = svgWidth - chartX - 50;

	// generate xscale range
	var xScale = d3.scale.linear()
		.range([chartX,chartWidth+chartX]);

	// Select svg
	var chart = d3.select(".chart")
		.attr("width", svgWidth)
		.attr("height", svgHeight);

	// Get max/mon counts
	var maxCount = d3.max(data, function(d) { return d.count; }),
		minCount = d3.min(data, function(d) { return d.count; });

	var barHeight = chartHeight / data.length;

	var fillColour=d3.rgb("#2E527E");

	var gData, xAxis;


	var idFunction = function(d) { return d.name; };
	var excluded = function(d) { return exclude.indexOf( d.name ) !== -1; };

	var getDataCount = function(d) { return excluded(d) ? 0 : d.count; };
	var getDataYearStart = function(d) { return excluded(d) ? 10000 : d.year.start; };
	var getDataYearEnd = function(d) { return excluded(d) ? 0 : d.year.end; };


	// Set the order to start with
	orderBy("countAsc");

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
	gData
		.append("rect")
		.attr("x", xScale(0) )
		.attr("style", "fill:"+fillColour) // function(d,i) { return "fill:" + fillColour.brighter((data.length-i)/15).toString(); } )
		.attr("width", 0 )
		.attr("height", barHeight - 1)
		//.append("a")
		//	.attr("xlink:href","http://www.example.com")
		.on("mouseover", function(d,i) {return d3.select("div.tooltip:nth-child("+(i+1)+")").style("visibility", "visible");})
		.on("mousemove", function(d,i){return d3.select("div.tooltip:nth-child("+(i+1)+")").style("top",
			(d3.event.pageY-20)+"px").style("left",(d3.event.pageX+20)+"px");})
		.on("mouseout", function(d,i){return d3.select("div.tooltip:nth-child("+(i+1)+")").style("visibility", "hidden");})
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
	xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

	// ...Draw the x-axis
	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0,"+ (chartHeight + chartY) + ")")
		.call(xAxis);

	//////////////////

	// Add a hover over text
	d3.select("body")
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

			var xDomainMin = d3.min(data, function(d) {
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

			xScale.domain([xDomainMin-20, xDomainMax+20 ]);

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

			// Redraw x-axis with years
			chart.select(".x.axis")
				.transition()
				.duration(500)
				.call(xAxis);

			var xAxisTicks = xScale.ticks();

			// Create some guidelines so we can see where years come in.
			var guidelines = chart.select("g.guidelines").selectAll( "line.guideline" )
				.data( xAxisTicks );

			guidelines.enter().append( "line" )
				.classed("guideline", 1 )
				.attr("x1", function(d) { return xScale(d); } )
				.attr("x2", function(d) { return xScale(d); } )
				.attr("y1", chartY )
				.attr("y2", chartY + chartHeight );

			xAxis.tickFormat( d3.format(",g") );
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
				.call(xAxis);

			chart.select("g.guidelines").selectAll( "line.guideline" )
				.data( [] )
				.exit().remove();

			xAxis.tickFormat( d3.format("g") );
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
