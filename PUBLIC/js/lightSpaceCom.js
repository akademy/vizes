/**
 * Created by matthew on 02/05/17.
 */
var chart = {
	create : function(data, config) {
		//
		// Configuration set up
		//
		var _select = config.select || "#chart",
			_width = config.width || 800,
			_height = config.height || 600;
		
		//
		// Chart create
		//
		var chartDiv = d3.select( _select );
		
		var	svg = chartDiv.append("svg")
			.attr("width", _width)
			.attr("height", _height);

		var centre = { x: _width /2,
						y: _height / 2};

		var comms = svg.append( "g" )
			.attr( "class", "comms" );

		comms.selectAll( "comm" )
			.data(data.comms)
			.enter()
			.append( "circle" )
			.attr( "cx", centre.x )
			.attr( "cy", centre.y )
			.attr( "r", function(d) { return d.ly * 10;} )

		var stars = svg.append( "g" )
			.attr( "class", "stars" );

		stars.selectAll( "star" )
			.data( data.stars )
			.enter()
			.append( "circle")
			.attr( "cx", function(d) { return d.dec * 10 + centre.x; } )
			.attr( "cy", function(d) { return d.ra * 10 + centre.y; } )
			.attr( "r", 20 );
	}
};