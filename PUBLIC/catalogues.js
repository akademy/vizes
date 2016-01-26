/**
 * Created by matthew on 05/12/2015.
 */

(function createChart(dataAll) {

	var data = dataAll.catalogues,
		links = dataAll.links;

	// Set some defaults
	var svgWidth = 960,
		svgHeight = 500;

	var force = d3.layout.force()
		.charge(-180)
		.linkDistance(70)
		.size([svgWidth, svgHeight])

		.nodes(data)
		.links(links)
		;

	data = force.nodes();
	links = force.links();

	var chartX = 200,
		chartY = 0,
		chartHeight = svgHeight - chartY - 50,
		chartWidth = svgWidth - chartX;

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
					return "translate(0," + i * barHeight + ")";
				});

	// Attach rectangles to g.bar and a href tags - but initially width is zero so bars "generate" later.
	gData
		.append("rect")
			.attr("x", xScale(0) )
			.attr("style", function(d,i) { return "fill:" + fillColour.brighter(i/10).toString(); } )
			.attr("width", 0 )
			.attr("height", barHeight - 1)
		//.append("a")
		//	.attr("xlink:href","http://www.example.com")
			;

	// Attach name of catalogue
	gData.append("text")
		.text(function(d) {
			return d.name;
		})
		.attr("y", barHeight/2)
		.attr("x", function() {
			return chartX - 150;
		});

	// Add a hover over text
	gData.append("title")
		.text(function (d) {
			return d.name + "\n" + d.count + " letters.\nFrom " + d.year.start + " to " + d.year.end;
		})
	;

	//////////////

	var network = chart.append( "g" ).attr("class","network");

	var lineLinks = network.append("g").selectAll("line.link")
		.data(links)
		.enter().append("line")
		.attr("class", "link")
		.attr("marker-end", "url(#arrow)")
		.attr("stroke", "#999" );

	// Create horizontal axis...
	xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

	// ...Draw the x-axis
	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0,"+ chartHeight + ")")
		.call(xAxis);


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
			data.sort( generateSort( function(o) {return o.name;}, 1 ) );
		}
		else if( by === "nameDesc" ) {
			data.sort( generateSort( function(o) {return o.name;} ) );
		}
		else if( by === "yearStartAsc" ) {
			data.sort( generateSort( function(o) {return o.year.start;}, 1 ) );
		}
		else if( by === "yearStartDesc" ) {
			data.sort( generateSort( function(o) {return o.year.start;} ) );
		}
		else if( by === "yearEndAsc" ) {
			data.sort( generateSort( function(o) {return o.year.end;}, 1 ) );
		}
		else if( by === "yearEndDesc" ) {
			data.sort( generateSort( function(o) {return o.year.end;} ) );
		}
		else if( by === "countAsc" ) {
			data.sort( generateSort( function(o) {return o.count;}, 1 ) );
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
				return "translate(0," + i * barHeight + ")";
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
	
	function update( value ) {
		/* Update to the correct chart, years or counts */
		
		var title = "";

		if( value !== "network") {
			force.stop();

			gData
				.transition()
				.duration(500)
				.attr("transform", function(d, i) {
					return "translate(0," + i * barHeight + ")";
				});
		}

		if( value === "network" ) {

			title = "Related catalogues";

			var nodeHeightScale = d3.scale.log()
				.range([5,20])
				.domain([minCount,maxCount]);

			/*force.start();

			gData
				.call(force.drag);

			force.on("tick", function() {
				lineLinks.attr("x1", function(d) { return d.x; })
						.attr("y1", function(d) { return d.y; })
						.attr("x2", function(d) { return d.x; })
						.attr("y2", function(d) { return d.y; });

				//gData.attr("x", function(d) { return d.x; })
				//	.attr("y", function(d) { return d.y; });

				gData
					.attr("transform", function(d) {
						return "translate(" + d.x + "," + d.y + ")";
					})
					;
			});
*/
			gData.selectAll("rect")
				.transition()
				.duration(500)
				.attr( "width", function( d ) { return nodeHeightScale(d.count); } )
				.attr( "height", function( d ) { return nodeHeightScale(d.count); } )
			;

			gData
				.transition()
				.duration(500)
				.attr("transform", function(d) {
					var translate = "translate(" + (chartX + chartWidth/2) + "," + (chartY + chartHeight/2) + ")"
					console.log( translate );
					return translate;
				})
			;


			setTimeout( function() {
				force.start();

				gData
					.call(force.drag);

				force.on("tick", function() {
					lineLinks.attr("x1", function(d) { return d.x; })
						.attr("y1", function(d) { return d.y; })
						.attr("x2", function(d) { return d.x; })
						.attr("y2", function(d) { return d.y; });

					//gData.attr("x", function(d) { return d.x; })
					//	.attr("y", function(d) { return d.y; });

					gData
						.transition()
						.duration(200)
						.attr("transform", function(d) {
							return "translate(" + d.x + "," + d.y + ")";
						})
					;
				});
			}, 500 )
		}
		else if ( value === "years") {

			title = "Year coverage of letters in catalogues";

			var xDomainMin = d3.min(data, function(d) {
					return d.year.start;
				}),
				xDomainMax = d3.max(data, function(d) {
					return d.year.end;
				});

			xScale.domain([xDomainMin-50, xDomainMax+50 ]);

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
					return xScale(d.year.end - d.year.start) - xScale(0);
				})
				.attr("y", function(d) {
					return (barHeight - barHeightScale(d.count))/2;
				} )
				.attr("height", function(d) {
					return barHeightScale(d.count);
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
		else if ( value === "chart") {

			title = "Number of letters in catalogue.";

			xScale.domain([0, d3.max(data, function(d) {
				return d.count;
			})]);

			gData.select("rect")
				.transition()
				.duration(500)
				.attr("x", xScale(0) )
				.attr("width", function(d) {
					return xScale(d.count) - xScale(0);
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
		update( this.value );
	});
	d3.selectAll(".sort input").on("change", function() {
		order( this.value );
	});

})( catalogueData );
