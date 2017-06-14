(function createChart() {

	var daysPerYear = 365.24,
		daysPerWeek = 7,
		millisecondsPerWeek = 1000*60*60*24*7,
		finalAge = 80;

	var now = new Date(),
		birthday = new Date( now.getFullYear() - 35, now.getMonth(), now.getDate() ),
		birthdayMilliseconds = birthday * 1,
		age = now - birthday;

	var weeksGoneNumber = age / millisecondsPerWeek,
		weeksFinalNumber = (daysPerYear * finalAge) / daysPerWeek;

	var weeks = [];

	for( var i=0; i < weeksFinalNumber; i++ ) {
		weeks.push( {
			number : i,
			gone : i < weeksGoneNumber,
			date : new Date( birthdayMilliseconds + (i * millisecondsPerWeek) )
		} );
	}

	// Set some defaults
	var svgWidth = 800,
		svgHeight = 800;

	var chartX = 250,
		chartY = 10,
		chartHeight = svgHeight - chartY - 50,
		chartWidth = svgWidth - chartX - 50;

	// Select svg
	var chart = d3.select( ".chart" )
		.attr( "width", svgWidth )
		.attr( "height", svgHeight );

	var blocks = weeksFinalNumber,
		sqrt = Math.sqrt( blocks ),
		rows = Math.ceil( sqrt ),
		columns = rows;

	var w = ( svgWidth / columns ),
		h = ( svgHeight / rows );

	if( w > h ) {
		w = h;
	}
	else if( h > w ) {
		h = w;
	}

	chart.selectAll( ".week" )
		.data( weeks, function(d) { return d.number; } )
		.enter()
		.append( "rect" )
			.classed( "week", true )
			.classed( "ten", function(d, i) { return ( (i+1) % 10) === 0; })
			//.classed( "year", function(d, i) { return ( (i+1) % 52) === 0; })
			.classed( "gone", function(d) { return d.gone; })
			.attr( "x", function(d, i) { return (i % columns) * w; } )
			.attr( "y", function(d, i) { return Math.floor(i / rows) * h; }  )
			.attr( "width", w - 1 )
			.attr( "height", h - 1 )
				.append("title")
				.text( function(d) {
					return "Week " + (d.number+1) + ", " + getDate( d.date );
				} );

	function getDate( date ) {
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
	}

	/*for( var y = 0; y<rows; y++ ) {

		for( var x = 0; x<rows; x++ ) {

			var w = ( svgWidth / rows ),
				h = ( svgHeight / rows );

			if( count <= blocks ) {

				chart.append( "rect" )
					.attr( "x", x * w )
					.attr( "y", y * h )
					.attr( "width", w - 1 )
					.attr( "height", h - 1 )
					.classed( "bong", ( (x + 1) % 10) === 0 || ( (y + 1) % 10 ) === 0  )
					.on( "mouseover", function() {
						d3.select(this).classed( "over", true );
						console.log("test");
					})
					.on( "mouseout", function() {
						d3.select(this).classed( "over", false);
					})
					.append("title")
						.text( "Week " + count + ", Left:" + ( blocks-count ) + ", age: " + Math.floor( count / 52 ) );

				//if( (count % 11) === 0 ) {
				//	chart.append("text")
				//		.attr("x", x * w + w / 3)
				//		.attr("y", y * h + h / 2)
				//		.text( count );
				//}

				count++;
			}
		}
	}*/
})();