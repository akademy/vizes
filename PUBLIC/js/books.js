/**
 * Created by matthew on 15/05/2016.
 */

(function createChart() {

	// pull in data from https://openlibrary.org/
	// "Pride and Prejudice". https://openlibrary.org/works/OL15080223W/Pride_Prejudice
	//      and in Json: https://openlibrary.org/works/OL15080223W.json
	//  Developer pages: https://openlibrary.org/developers
	//      API: 
	var data = booksData;

	// Set some defaults
	var svgWidth = 800,
		svgHeight = 3600;

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


	var barHeight = chartHeight / data.length;

	var fillColour=d3.rgb("#2E527E");

	var gData, xAxis;


	var idFunction = function(d) { return d.position ; };

	// Set the order to start with
	orderBy("positionAsc");

	xScale.domain([0, 200]);

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

	// Attach name of catalogue
	var exclude = [];

	gData.append("text")
		.text(function(d) {
			return d.position;
		})
		.attr("y", barHeight/2)
		.attr("x", function() {
			return 0;
		});

	gData.append("text")
		.text(function(d) {
			return d.title;
		})
		.attr("y", barHeight/2)
		.attr("x", function() {
			return chartX + 100 - this.getBBox().width - 10;
		});

	gData.append("text")
		.text(function(d) {
			return d.author;
		})
		.attr("y", barHeight/2)
		.attr("x", function() {
			return chartX + 400 - this.getBBox().width - 10;
		});


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
			return "<strong>" + d.title + "</strong><br/>" +
				d.author + " letters.";
		})
	;


	function generateSort( memberFunction, ascending ) {
		/* Generate a sort function with particular features */
		return function(a,b) {
			var compare = ((memberFunction(a) < memberFunction(b)) ? -1 : memberFunction(a) > memberFunction(b));
			if(compare===0) {
				compare = ( (a.position < b.position) ? -1 : a.position > b.position );
			}
			return (ascending) ? compare : compare*-1;
		};
	}

	function orderBy( by ) {
		/* Change the order of "data". */
		if( by === "titleAsc" ) {
			data.sort( generateSort( function(o) {return o.title;}, true ) );
		}
		else if( by === "titleDesc" ) {
			data.sort( generateSort( function(o) {return o.title;} ) );
		}
		else if( by === "surnameAsc" ) {
			data.sort( generateSort( function(o) {return o.surname;}, true ) );
		}
		else if( by === "surnameDesc" ) {
			data.sort( generateSort( function(o) {return o.surname;} ) );
		}
		else if( by === "positionAsc" ) {
			data.sort( generateSort( function(o) {return o.position;}, true ) );
		}
		else { // by === "positionDesc"
			data.sort( generateSort( function(o) {return o.position;} ) );
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

		xScale.domain([0, 200]);

		chart.select(".x.axis")
			.transition()
			.duration(500)
			.call(xAxis);

		chart.select("g.guidelines").selectAll( "line.guideline" )
			.data( [] )
			.exit().remove();

		xAxis.tickFormat( d3.format("g") );

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