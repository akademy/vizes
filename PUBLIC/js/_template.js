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
		
		svg.append("g")
			.attr("class","group");
		svg.selectAll("g.group")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", function(_, i) { return i * 10;})
			.attr("y", function(d) { return d;})
			.attr("width", 10 )
			.attr("height", 10 )
		
	}
};
