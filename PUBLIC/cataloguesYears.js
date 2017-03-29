/**
 * Created by matthew on 05/12/2015.
 */

function createChart(dataTemp, config) {

	var _dataAll = [], _dataFiltered = [], catalogues;
	dummyYear = config.dummyYear || 0; // TODO: I need to calculate a dummy year...
	config.scaleMarkers = config.scaleMarkers || 1;
	
	//
	/* Convert dataAll into a usable format */
	//
	catalogues = Object.keys(dataTemp);
	var limit = catalogues.length;//10;//
	//for( var i=0; i < limit; i++ ) {
	//	var catName = catalogues[i],
	//}

	var yearsStart = 10000, yearsEnd = 0;
	for( var i=0; i < limit; i++ ) {
		var catName = catalogues[i],
			start = dataTemp[catName]["start"],
			end = dataTemp[catName]["end"],
			count = 0, number,
			years = [], y;

		var d = {
			id : dataTemp[catName]["id"],
			name : catName
		};

		for( y=start; y<=end; y++ ) {
			number = 0;
			if( y in dataTemp[catName] ) {
				number = dataTemp[catName][y]
			}

			if( number != 0 ) {
				years.push( {
					"year" : y,
					"number" : number,
					"parent" : d
				} );
				count += number;
			}
		}

		d.count = count;
		d.years = years;
		d.year = {
			start: start,
			end : end
		};

		if( d.year.start < yearsStart ) {
			yearsStart = d.year.start;
		}
		if( d.year.end > yearsEnd ) {
			yearsEnd = d.year.end;
		}

		_dataAll.push( d );
	}

	var maxYearNumber = getMaxYearNumber(_dataAll);

	if( dummyYear === 0 ) {
		dummyYear = yearsStart;
	}

	dataTemp = null;

	_dataFiltered = filterData( _dataAll, function() {
		// TODO: Some filtering mechanism, probably picked up from url.
		// so we can link to different portions of the timeline
		return true;
	});


	//
	/* Create D3 Chart */
	//

	var chartDiv = d3.select(".chart"),
		chart = chartDiv.append("svg"); // create our svg

	// Set some defaults

	var scaleHeight = 30,
		groupNameWidth = 200,
		groupHeight = config.groupHeight || 20,
		groupGapHeight = config.groupGapHeight || 5, // TODO: Have gaps between bar groups!
		chartHeight =  _dataAll.length * (groupHeight + groupGapHeight);

	var svgHeight = chartHeight + scaleHeight * 2;

	chart.attr("width", "100%" )
		.attr("height", svgHeight);

	var svgWidth = chartDiv[0][0].clientWidth;

	var chartX = groupNameWidth,
		chartY = scaleHeight,
		chartWidth = svgWidth - chartX;

	var defaultStartYear = yearsStart,
		defaultEndYear = yearsEnd,

		defaultStartYearBuffered = dummyYear,//defaultStartYear - 10,
		defaultEndYearBuffered = Math.ceil(defaultEndYear + ((yearsEnd - yearsStart)*0.05)),

		chartStartYear = defaultStartYearBuffered,
		chartEndYear = defaultEndYearBuffered,

		previousStartYear,
		previousEndYear;

	// generate xscale range
	var xScale = d3.scale.linear()
		.range([chartX, chartX + chartWidth])
		.domain([chartStartYear, chartEndYear]);

	var sizeScale;
	if( maxYearNumber > 100 ) {
		sizeScale = d3.scale.log()
			.range([1,10,groupHeight])
			.domain([1,100,maxYearNumber]);
	}
	else {
		sizeScale = d3.scale.linear()
			.range([1, groupHeight])
			.domain([1, maxYearNumber]);
	}

	var idFunction = function(d) { return d.name; };

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
		.data(_dataFiltered, idFunction )
		.enter()
			.append("g")
				.attr("class","data")
				.attr("transform", function(d, i) {
					return "translate(0," + ( (i * (groupHeight + groupGapHeight) ) + chartY) + ")";
				})
	;

	var fillColour=d3.rgb("#2E527E"),
		fillColourNoYear=d3.rgb("#7E7E7E"),
		colourScale = d3.scale.log()
		.range([1.9,0.1])
		.domain([1,maxYearNumber] ); // keep radii same for entire set, but change colour based subset

	var overMarker = false;
	gData.append("g").selectAll("rect")
		.data( function (d) {
			var data = [];
			for( var i=0;i<d.years.length;i++) {
				var o = d.years[i];
				o.parent = d;
				data.push(o);
			}
			return data;//d.years;
		}, function(d) {
			return d.year;
		})
		.enter()
			.append("rect")
				.attr("y", groupHeight/2 ) // Start in middle
				.attr("height",0)
				.attr("rx", 0 )
				.attr("ry", 0 )
				.attr("fill", function(d) {
					if( d.year === dummyYear ) {
						return fillColourNoYear;
					}
					return fillColour;
				} )

				.on("mouseover", function(d) {
					overMarker = true;
					
					var tip = d.year;
					if( config.markerHoverHtml ) {
						tip = config.markerHoverHtml(d);
					}
					tooltip.html( tip );
				})
				.on("mouseout", function() {
					overMarker = false;
				})
				.on( "click", function(d) {
					if( config.markerClick ) {
						config.markerClick(d);
					}
				})
	;

	// Attach name of catalogue
	gData.append("text")
		.html(function(d) {
			if( config.groupNameHtml ) {
				return config.groupNameHtml(d);
			} else {
				var name = d.name;
				if( name.length > 25 ) {
					name = name.substr(0,22) + "...";
				}
				return name;
			}
		})
		.attr("y", groupHeight * 0.4 )
		.attr("x", function() {
			return chartX - this.getBBox().width;//return chartX - 250;
		})

		//.on("mouseover", function(d) {
		//	tooltip.style("visibility", "visible");
		//	tooltip.html( "<b>" + d.name + "</b><br/>"
		//		+ d.year.start + " to " + d.year.end + "<br/>"
		//		+ d.count + "letters<br/>"
		//		+ '<p style="text-align:right;width:100%;margin:0"><small>(click to learn more)</small></p>');
		//})
		//.on("mouseout", function() {
		//	tooltip.style("visibility", "hidden");
		//})
		.append("title")
			.text( function(d) { return d.name; } );

	
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
		.attr("class", "x axis top")
		.attr("transform", "translate(0," + chartY + ")")
		.call(xAxisTop);

	chart.append("g")
		.attr("class", "x axis bottom")
		.attr("transform", "translate(0,"+ (svgHeight - scaleHeight) + ")")
		.call(xAxisBottom);



	//
	/* Tooltip setup */
	//
	var tooltip = d3.select("body")
		.append("div")
		.classed("mytooltip",1)
		.text("");

	var guidelines;
	chart.on("mouseover", function() {
			return tooltip.style("visibility", "visible");
		})
		.on("mousemove", function() {
			var pos = d3.mouse(chart.node());

			if( pos[0] > chartX && pos[1] > chartY && pos[0] < chartX + chartWidth && pos[1] < chartY + chartHeight ) {

				var minX = xScale( defaultStartYear );

				if( !overMarker ) {
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

				tooltip.style("visibility", "hidden");
				chart.select("g.guidelines line.mouse")
					.attr("x1", -5 )
					.attr("x2", -5 )

			}
			
			return tooltip.style("top",(d3.event.pageY-50)+"px").style("left",(d3.event.pageX+20)+"px");
		})
		.on("mouseout", function() {
			return tooltip.style("visibility", "hidden");
		});
	
	
	function updateOrder( orderFunction, data ) {
		/* reorder bars on chart */
		data.sort( orderFunction );
		
		chart.selectAll("g.data")
			.data(data, idFunction )
			// Update existing bars...
			.transition()
			.delay( 0 )
			.duration(1000)
			.attr("transform", function(d, i) {
				return "translate(0," + ( (i * (groupHeight + groupGapHeight) ) + chartY) + ")";
			})
		;
	}

	var initial = true;
	function update( data ) {
		/* Update to the correct chart, years or counts */

		var d3DataGroup;
		var yearBuffer = (chartEndYear - chartStartYear) * 0.03;
		var circleDuration = 2000,
			circleDelay = 0,
			axisDuration = 2000,
			ease = "easeInCirc";

		if( initial ) {
			circleDuration = 500;
			circleDelay = function(d) { return (d.year - chartStartYear) * 3;};
			axisDuration = 500;
			ease = "linear";

			initial = false;
		}
		else {
			var yearChange = Math.max( Math.abs( previousStartYear - chartStartYear) , Math.abs( previousEndYear - chartEndYear) ),
				duration = yearChange * 10;
			if( duration > 1500) {
				duration = 1500;
			}
			else if( duration < 800 ) {
				duration = 800;
			}
			circleDuration = axisDuration = duration;
		}

		/* update catalogue group */
		d3DataGroup = gData
			.data(data, idFunction );

		d3DataGroup
			.transition()
			.ease(ease)
			.duration(circleDuration)
			.attr("transform", function(d, i) {
				return "translate(0," + ( (i * (groupHeight + groupGapHeight) ) + chartY) + ")";
			});

		d3DataGroup
			.exit()
			.transition()
			.ease(ease)
			.duration(circleDuration)
			.attr("transform", function() {
				return "translate(0," + (chartHeight+groupHeight*3) +")";
			});

		d3DataGroup
			.enter()
			.append("g")
			.attr("class","data")
			.attr("transform", function(d, i) {
				return "translate(0," + ((i * (groupHeight+groupGapHeight)) + chartY) + ")";
			});

		xScale.domain([chartStartYear - yearBuffer, chartEndYear+ yearBuffer ]);

		gData.select("g").selectAll( "rect" )//ellipse" ) //circle")
			.attr("fill-opacity", function(d) {
				return "0.5"
			});

		var maxNumber = getMaxYearNumber(data);
		colourScale
			.domain([1,maxNumber]); // keep radii same for entire set, but change colour based on subset

		d3DataGroup = gData.select("g").selectAll("rect")//"ellipse" ) //"circle")
			.data(function (d) {
				return d.years
			},function(d) {
				return d.year;
			});

		d3DataGroup
			.transition()
			.ease(ease)
			.delay(circleDelay)
			.duration(circleDuration)
			.attr("y", function(d) {
				var height;
				if( d.year == dummyYear ) {
					height = Math.min( sizeScale(d.number), 20 );
				}
				else {
					height = sizeScale(d.number);
				}
				return (groupHeight-(height* config.scaleMarkers))/2;
			})
			.attr("x", function (d) {
				return xScale(d.year);
			})
			.attr("width", function (d) {
				if( d.year === dummyYear ) {
					return Math.min( sizeScale(d.number), 20 );
				}
				return (xScale(d.year) - xScale(d.year-1));
			})
			.attr("height",function (d) {
				if( d.year === dummyYear ) {
					return Math.min( sizeScale(d.number), 20 );
				}
				return sizeScale(d.number) * config.scaleMarkers;
			})
			.attr("fill-opacity", function(d) {
				var op;

				if( d.year === dummyYear ) {
					if( chartStartYear === defaultStartYearBuffered ) {
						op = 1;
					}
					else {
						op = 0;
					}
				}
				else if( d.year < chartStartYear - yearBuffer || d.year > chartEndYear + yearBuffer ) {
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
				var scale = colourScale(d.number), colour;
				if( d.year === dummyYear ) {
					colour = fillColourNoYear.brighter(scale).toString();
				}
				else {
					colour = fillColour.brighter(scale).toString();
				}
				return colour;
			} );

		d3DataGroup
			.exit();
			//.transition()
			//.delay(function(d) { return (d.year - chartStartYear) * 3;})
			//.duration(1000)
			//.attr("r",0 );


		var dataChartHeight = ( (groupHeight+groupGapHeight) * data.length );

		// Redraw x-axis with years
		chart.select(".x.axis.top")
			.transition()
			.ease(ease)
			.duration(axisDuration)
			.call(xAxisTop);

		chart.select(".x.axis.bottom")
			.transition()
			.ease(ease)
			.duration(circleDuration) // use circle duration, otherwise it "overtakes" the circle transition
			.call(xAxisBottom)
			.attr("transform", "translate(0,"+ (dataChartHeight+chartY) + ")");


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

	function filterData( data, filterer ) {
		return data.filter( filterer );
	}

	function filterDataYears( data, start, end ) {
		return filterData( data, function(d) {
			for( var y=0;y<d.years.length;y+=1 ) {
				if( d.years[y].year != dummyYear && d.years[y].year > start && d.years[y].year < end ) {
					return true;
				}
			}
			return false;
		});
	}

	function chartYears( start, end ) {

		previousStartYear = chartStartYear;
		previousEndYear = chartEndYear;
		
		chartStartYear = start;
		chartEndYear = end;

		slider.value([start,end]);

		_dataFiltered = filterDataYears( _dataAll, chartStartYear, chartEndYear );
		
		update( _dataFiltered );
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

	function getMinYearNumber( data ) {
		var min = 100000;

		for( var i=0;i<data.length;i++) {
			var years = data[i].years;
			for( var j = 0; j<years.length; j++ ) {
				if(  years[j].year !== dummyYear && years[j].number < min  ) {
					min = years[j].number;
				}
			}
		}

		return min;
	}

	// Update the chart on load, this makes the first circles "appear".
	setTimeout( function() {
		update( _dataFiltered );
	}, 10 );
	
	
	return {
		showYears : function( yearStart, yearEnd ) {
			yearStart = yearStart || defaultStartYearBuffered;
			yearEnd = yearEnd || defaultEndYearBuffered;
			chartYears( yearStart, yearEnd );
		},
		reorder : function( sortFunction ) {
			updateOrder( sortFunction, _dataFiltered );
		}
	}
}
 