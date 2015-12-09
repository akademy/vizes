/**
 * Created by matthew on 05/12/2015.
 */

(function createChart(data) {

	var svgWidth = 960,
		svgHeight = 500;

	var chartX = 200,
		chartY = 0,
		chartHeight = svgHeight - chartY - 50,
		chartWidth = svgWidth - chartX;

	var xScale = d3.scale.linear()
		.range([chartX,chartWidth+chartX]);

	var chart = d3.select(".chart")
		.attr("width", svgWidth)
		.attr("height", svgHeight);

	var maxCount = d3.max(data, function(d) { return d.count; }),
		minCount = d3.min(data, function(d) { return d.count; });
		
	var barHeight = chartHeight / data.length;
	
	var fillColour=d3.rgb("#2E527E");
	
	var bar, xAxis;
	
	orderBy("countAsc");
	
	xScale.domain([0, maxCount ]);
	chart.append( "g" ).attr("class","guidelines");

	
	bar = chart.selectAll("g.bar")
		.data(data, function(d) { return d.name; } )
		.enter()
			.append("g")
				.attr("class","bar")
				.attr("transform", function(d, i) {
					return "translate(0," + i * barHeight + ")";
				});

	bar.append("rect")
		.attr("x", xScale(0) )
		.attr("style", function(d,i) { return "fill:" + fillColour.brighter(i/10).toString(); } )
		.attr("width", 0 )
		.attr("height", barHeight - 1);

	bar.append("text")
		.text(function(d) {
			return d.name;
		})
		.attr("y", barHeight/2)
		.attr("x", function() {
			return chartX - 150;
		});

	bar.append("title")
		.text(function (d) {
			return d.name + "\n" + d.count + " letters.\nFrom " + d.year.start + " to " + d.year.end;
		})
	;

	xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0,"+ chartHeight + ")")
		.call(xAxis);


	d3.selectAll(".mode input").on("change", function() {
		update( this.value );
	});
	
	d3.selectAll(".sort input").on("change", function() {
		order( this.value );
	});
	
	function generateSort( memberFunction, ascending ) {
		return function(a,b) {
			var compare = ((memberFunction(a) < memberFunction(b)) ? -1 : memberFunction(a) > memberFunction(b));
			if(compare===0) {
				compare = ( (a.name < b.name) ? -1 : a.name > b.name );
			}
			return (ascending) ? compare : compare*-1;
		};
	}
	
	function orderBy( by ) {
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
		
		orderBy( value );
		
		chart.selectAll("g.bar")
			.data(data, function(d) { return d.name; } )
			// Update bars...
			.transition()
			.duration(1000)
			.attr("transform", function(d, i) {
				return "translate(0," + i * barHeight + ")";
			})
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
		var title = "";

		if ( value === "years") {

			title = "Year coverage of letters in catalogues";

			var xDomainMin = d3.min(data, function(d) {
					return d.year.start;
				}),
				xDomainMax = d3.max(data, function(d) {
					return d.year.end;
				});

			xScale.domain([xDomainMin-50, xDomainMax+50 ]);

			var barHeightScale = d3.scale.log()
				.range([5,barHeight-5])
				.domain([minCount,maxCount]);

			bar.select("rect")
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

			chart.select(".x.axis")
				.transition()
				.duration(500)
				.call(xAxis);

			var xAxisTicks = xScale.ticks();

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

			bar.select("rect")
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

	setTimeout( function() {
		update("chart");
	}, 100 );
})( [
	{
		name: "Bodleian card catalogue",
		count: 48691,
		year: {
			start : 1500,
			end : 1800
		}
	},
	{
		name: "Groot, Hugo de",
		count: 8034,
		year: {
			start : 1500,
			end : 1600
		}
	},
	{
		name: "Huygens, Constantijn",
		count:7120,
		year: {
			start : 1700,
			end : 1800
		}
	},
	{
		name: "Hartlib, Samuel",
		count:4718,
		year: {
			start : 1600,
			end : 1800
		}
	},
	{
		name: "Andreae, Johann Valentin",
		count:3696,
		year: {
			start : 1340,
			end : 1750
		}
	},
	{
		name: "Huygens, Christiaan",
		count:3080,
		year: {
			start : 1280,
			end : 1830
		}
	},
	{
		name: "Kircher, Athanasius",
		count:2690,
		year: {
			start : 1067,
			end : 1790
		}
	},
	{
		name: "Graffigny, Françoise de",
		count:2524,
		year: {
			start : 1340,
			end : 1650
		}
	},
	{
		name: "Lhwyd, Edward",
		count:2128,
		year: {
			start : 1230,
			end : 1340
		}
	},
	{
		name: "Wallis, John",
		count:2001,
		year: {
			start : 1400,
			end : 1450
		}
	},
	{
		name: "Mersenne, Marin",
		count:1904,
		year: {
			start : 1400,
			end : 1500
		}
	}
] );
