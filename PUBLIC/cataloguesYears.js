/**
 * Created by matthew on 05/12/2015.
 */

(function createChart() {

	var dataPostgres = catalogueYearsCount;
	var dataTemp = {},
		dummyYear = 1490;

	var dataAll = [], dataFiltered = [], catalogues;

	//
	/* Convert dataAll into a usable format */
	//

	for( var i=0; i < dataPostgres.length; i++ ) {
		var yearData = dataPostgres[i],
			catalogueName = yearData["Catalogue"];

		if( ! (catalogueName in dataTemp) ) {
			dataTemp[catalogueName] = {
				"start" : 2000,
				"end" : 0
			};
		}

		if( yearData.year == 0 ) {
			yearData.year = dummyYear; // A crafty cheat for entries without years.
		}

		dataTemp[catalogueName][yearData.year] = yearData.number;

		if( yearData.year < dataTemp[catalogueName]["start"]) {
			dataTemp[catalogueName]["start"] = yearData.year;
		}
		if( yearData.year > dataTemp[catalogueName]["end"]) {
			dataTemp[catalogueName]["end"] = yearData.year;
		}
	}

	catalogues = Object.keys(dataTemp);
	var limit = catalogues.length;//10;//
	for( i=0; i < limit; i++ ) {
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

			if( number != 0 ) {
				years.push( {
					"year" : y,
					"number" : number
				} );
				count += number;
			}
		}

		dataAll.push( {
			name : catName,
			count : count,
			years: years,
			year : {
				"start": start,
				"end": end
			}
		});
	}

	var maxYearNumber = getMaxYearNumber(dataAll);

	dataTemp = null;


	//
	/* Create D3 Chart */
	//

	var chartDiv = d3.select(".chart"),
		chart = chartDiv.append("svg"); // create our svg

	// Set some defaults
	var svgWidth = 1200,// = screen.availWidth
		svgHeight = 2000;// = screen.availHeight - 200

	svgHeight = dataAll.length * 50;

	chart.attr("width", "100%" )  //svgWidth)
		.attr("height", svgHeight);

	svgWidth = chartDiv[0][0].clientWidth;
	console.log(svgWidth,chartDiv);

	var chartX = 250,
		chartY = 20,
		chartHeight = svgHeight - chartY - 50,
		chartWidth = svgWidth - chartX - 50;

	var defaultStartYear = 1500,
		defaultEndYear = 1850,

		chartStartYear = defaultStartYear - 10,
		chartEndYear = defaultEndYear + 20;



	// Get max/mon counts
		//startYear= d3.min(dataAll, function(d) { return d.year.start; }),
		//endYear= d3.max(dataAll, function(d) { return d.year.end; }),
		//chartStartYear = startYear - 10,
		//chartEndYear = endYear + 20;

	filterData( function() {
		// TODO: Some filtering mechanism, probably picked up from url.
		return true;
	});

	var barHeight = chartHeight / dataFiltered.length;

	// generate xscale range
	var xScale = d3.scale.linear()
		.range([chartX,chartWidth+chartX])
		.domain([chartStartYear, chartEndYear ]);

	var sizeScale = d3.scale.log()
		.range([1,10,barHeight/2]) // circle radii
		.domain([1,100,maxYearNumber]);

	var idFunction = function(d) { return d.name + d.originalPosition ; };

	// Set the order to start with
	orderBy("nameAsc", dataFiltered);

	chart.append( "g" )
		.attr("class","guidelines")
			.append("line")
				.classed("mouse",1)
				.attr("x1", -1 )
				.attr("x2", -1 )
				.attr("y1", chartY )
				.attr("y2", chartY + chartHeight );

	// Attach dataFiltered (and create) g areas, which we transform into position
	var gData = chart.selectAll("g.data")
		.data(dataFiltered, idFunction )
		.enter()
			.append("g")
				.attr("class","data")
				.attr("transform", function(d, i) {
					return "translate(0," + ((i * barHeight) + chartY) + ")";
				})
	;

	var fillColour=d3.rgb("#2E527E"),
		colorScale = d3.scale.log()
		.range([1.9,0.1])
		.domain([1,maxYearNumber] ); // keep radii same for entire set, but change colour based subset

	var overCircle = false;
	gData.append("g").selectAll("circle")
		.data(function (d) {
			return d.years;
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
	gData.append("text")
		.text(function(d) {
			return d.name;
		})
		.attr("y", barHeight/2)
		.attr("x", function() {
			return chartX - this.getBBox().width - 10;//return chartX - 250;
		})
		.on("click",function(d) {
			// window.location = "http://emlo.bodleian.ox.ac.uk/blog/";
		});

	//
	/* Create two horizontal axes... */
	//
	var xAxisBottom = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
		.tickFormat( d3.format("g") ),

	xAxisTop = d3.svg.axis()
		.scale(xScale)
		.orient("top")
		.tickFormat( d3.format("g") );

	chart.append("g")
		.attr("class", "x axis bottom")
		.attr("transform", "translate(0,"+ (chartHeight + chartY) + ")")
		.call(xAxisBottom);

	chart.append("g")
		.attr("class", "x axis top")
		.attr("transform", "translate(0," + chartY + ")")
		.call(xAxisTop);


	//
	/* Tooltip setup */
	//
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
	
	function orderBy( by, data ) {
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
	
	function order( value, data ) {
		/* reorder bars on chart */
		orderBy( value, data );
		
		chart.selectAll("g.data")
			.data(data, idFunction )
			// Update existing bars...
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
	
	function update( data ) {
		/* Update to the correct chart, years or counts */

		var d3DataGroup;
		var yearBuffer = (chartEndYear - chartStartYear) * 0.05;
		var circleDuration = 2000,
			axisDuration = 100;

		/* update catalogue group */
		d3DataGroup = gData
			.data(data, idFunction );

		d3DataGroup
			.transition()
			.duration(circleDuration)
			.attr("transform", function(d, i) {
				return "translate(0," + ((i * barHeight) + chartY) + ")";
			});

		d3DataGroup
			.exit()
			.transition()
			.duration(circleDuration)
			.attr("transform", function(d, i) {
				return "translate(0," + (chartHeight+barHeight*3) +")";
			});

		d3DataGroup
			.enter()
			.append("g")
			.attr("class","data")
			.attr("transform", function(d, i) {
				return "translate(0," + ((i * barHeight) + chartY) + ")";
			});

		var maxCount = d3.max(data, function(d) { return d.count; }),
			minCount = 0;//d3.min(data, function(d) { return d.count; });

		xScale.domain([chartStartYear - yearBuffer, chartEndYear+ yearBuffer ]);

		// Use a log scale to show count as height of event box
		var barHeightScale = d3.scale.log()
			.range([5,barHeight-5])
			.domain([minCount,maxCount]);


		d3DataGroup = gData.select("g").selectAll("circle")
			.data(function (d) {
				return d.years.filter( function(d) {
					return true;// d.year > chartStartYear - yearBuffer && d.year < chartEndYear + yearBuffer;
				});
			},function(d) {
				return d.year;
			});

		var maxNumber = getMaxYearNumber(data);

		colorScale
			.domain([1,maxNumber] ); // keep radii same for entire set, but change colour based on subset

		d3DataGroup
			.transition()
			//.delay(function(d) { return (d.year - chartStartYear) * 3;})
			.duration(circleDuration)
			.attr("cx", function (d) { return xScale(d.year); } )
			//.attr("cy",barHeight/2)
			.attr("r",function (d) {
				if( d.year == dummyYear ) {
					return Math.min( sizeScale(d.number), 20 );
				}
				return sizeScale(d.number);
			} )
			.attr("fill-opacity", function(d) {
				var op;
				if( d.year < chartStartYear - yearBuffer || d.year > chartEndYear + yearBuffer ) {
					// totally outside of range
					op = 0;
				}
				else if( d.year > chartStartYear && d.year < chartEndYear ) {
					// totally inside range
					op = 1;
				}
				else {
					// Inside buffer region.
					if( d.year < chartStartYear ) {
						op = (chartStartYear - d.year) / yearBuffer;
					}
					else {
						op = (d.year - chartEndYear ) / yearBuffer;
					}

					op = 1 - op;
				}
				return op.toString();
			})
			.attr("fill", function(d) {
				var scale = colorScale(d.number),
					colour = fillColour.brighter(scale).toString();
				return colour;
			} );

		d3DataGroup
			.exit();
			//.transition()
			//.delay(function(d) { return (d.year - chartStartYear) * 3;})
			//.duration(1000)
			//.attr("r",0 );


		var dataChartHeight = (barHeight*data.length);

		// Redraw x-axis with years
		chart.select(".x.axis.bottom")
			.transition()
			.duration(circleDuration) // use circle duration, otherwise it "overtakes" the circle transisition
			.call(xAxisBottom)
			.attr("transform", "translate(0,"+ (dataChartHeight+15) + ")");

		chart.select(".x.axis.top")
			.transition()
			.duration(axisDuration)
			.call(xAxisTop);

		var xAxisTicks = xScale.ticks();

		// Create some guidelines so we can see where years come in.
		guidelines = chart.select("g.guidelines").selectAll( "line.guideline" )
			.data( xAxisTicks );

		guidelines
			.transition()
			.duration( circleDuration )
			.attr("x1", function(d) { return xScale(d); } )
			.attr("x2", function(d) { return xScale(d); } )
			.attr("y1", chartY )
			.attr("y2", chartY + dataChartHeight );

		guidelines
			.enter()
			.append( "line" )
			.classed("guideline", 1 )
			.attr("x1", function(d) { return xScale(d); } )
			.attr("x2", function(d) { return xScale(d); } )
			.attr("y1", chartY )
			.attr("y2", chartY + dataChartHeight );

		guidelines
			.exit()
			.remove();

		chart.select("g.guidelines line.mouse")
			.transition()
			.duration( circleDuration )
			.attr("y2", chartY + dataChartHeight );

	}

	function filterData( filterer ) {
		dataFiltered = dataAll.filter( filterer );
	}

	function filterDataYears( start, end ) {
		filterData( function(d) {
			for( var y=0;y<d.years.length;y+=1 ) {
				if( d.years[y].year != dummyYear && d.years[y].year > start && d.years[y].year < end ) {
					return true;
				}
			}
			return false;
		});
	}

	function chartYears( start, end ) {
		chartStartYear = start;
		chartEndYear = end;

		filterDataYears( chartStartYear, chartEndYear );
	}

	function getMaxYearNumber( data ) {
		var max = 0;

		for( var i=0;i<data.length;i++) {
			var years = data[i].years;
			for( var j = 0; j<years.length; j++ ) {
				if(  years[j].year !== dummyYear && years[j].number > max  ) {
					max = years[j].number;
				}
			}
		}

		return max;
	}

	// Update the chart on load, this makes the first circles "appear".
	setTimeout( function() {
		update( dataFiltered );
	}, 10 );

	setTimeout( function() {
		//chartYears( 1680, 1750 );
		//update( dataFiltered );

	}, 1500 );

	setTimeout( function() {
		//chartYears( 1500, 1850 );
		//update( dataFiltered );

	}, 3000 );

	d3.selectAll(".sort input").on("change", function() {
		order( this.value, dataFiltered );
	});


	d3.select("#btnYearAll").on("click", function() {
		chartYears( defaultStartYear, defaultEndYear );
		update( dataFiltered );
	});

	d3.select("#btnYear1500").on("click", function() {
		chartYears( 1500, 1549 );
		update( dataFiltered );
	});
	d3.select("#btnYear1550").on("click", function() {
		chartYears( 1550, 1599 );
		update( dataFiltered );
	});
	d3.select("#btnYear1600").on("click", function() {
		chartYears( 1600, 1649 );
		update( dataFiltered );
	});
	d3.select("#btnYear1650").on("click", function() {
		chartYears( 1650, 1699 );
		update( dataFiltered );
	});
	d3.select("#btnYear1700").on("click", function() {
		chartYears( 1700, 1749 );
		update( dataFiltered );
	});
	d3.select("#btnYear1750").on("click", function() {
		chartYears( 1750, 1799 );
		update( dataFiltered );
	});
	d3.select("#btnYear1800").on("click", function() {
		chartYears( 1800, 1850 );
		update( dataFiltered );
	});

})();
