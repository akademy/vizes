/**
 * Created by matthew on 05/12/2015.
 */
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

function createChart(data) {

	var maxCount = d3.max(data, function(d) { return d.count; }),
		minCount = d3.min(data, function(d) { return d.count; });

	xScale.domain([0, maxCount ]);

	var barHeight = chartHeight / data.length;

	chart.append( "g" ).attr("class","guidelines");

	var bar = chart.selectAll("g.bar")
		.data(data)
		.enter().append("g").attr("class","bar")
		.attr("transform", function(d, i) {
			return "translate(0," + i * barHeight + ")";
		});

	bar.append("rect")
		.attr("x", xScale(0) )
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
			return d.name + ". " + d.count + " letters. From " + d.year.start + " to " + d.year.end;
		})
	;

	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0,"+ chartHeight + ")")
		.call(xAxis);


	d3.selectAll("input").on("change", function() {
		update( this.value );
	});

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
		else {

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
}

createChart(
	[
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
	]
);