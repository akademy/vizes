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
		chartDiv.append("style").attr("id","chartStyles");

		var	svg = chartDiv.append("svg")
			.attr("width", _width)
			.attr("height", _height);

		var centre = { x: _width /2,
			y: _height / 2};

		var waiting = svg.append("g")
			.style("visibility","hidden")
			.append("g")
			.attr("id","waiting");

		// Image from: https://www.shareicon.net/alarm-clock-clock-timer-tools-and-utensils-time-808457
		//
		waiting.append("path")
			.attr("d", "m436.4,278.3c0-102.3-80-186.1-180-187.2v-28.1h15.6v-20.8h-53.1v20.8h16.6v29.1c-91.2,9.7-163.3,89.8-163.3,186.3 0,64.7 32,121.9 80.8,155.6l-54.8,52 14.3,15.1 58.9-55.9c24.8,13.1 53,20.5 82.8,20.5 30.2,0 58.7-7.6 83.8-21l59.2,56.2 14.3-15.1-55.2-52.4c48.4-33.8 80.1-90.8 80.1-155.1zm-182.1,166.5c-88.4,0-161.3-74.9-161.3-166.5s71.8-166.5 161.3-166.5 161.3,74.9 161.3,166.5-72.9,166.5-161.3,166.5z")
			.attr("class","path");
		waiting.append("polygon")
			.attr("points", "256.4,136.9 235.6,136.9 235.6,285.6 315.7,321 324,301.2 256.4,272.1   ");
		waiting.append("path")
			.attr("d", "m164.6,37.4c-35.1-35.1-92.1-35.1-127.3,0-35.1,35.1-35.1,92.1 0,127.3 2,2 4.2,3.9 6.3,5.7l126.4-127.2c-1.7-2-3.5-3.9-5.4-5.8zm-120.3,102.4c-19.8-26.7-17.5-64.6 6.7-88.8 24.1-24.1 61.7-26.4 88.4-7l-95.1,95.8z");
		waiting.append("path")
			.attr("d", "m473.7,37.4c-35.1-35.1-92.1-35.1-127.3,0-1.9,1.9-3.7,3.9-5.3,5.9l126.3,127.2c2.2-1.8 4.3-3.7 6.3-5.7 35.2-35.3 35.2-92.3 0-127.4zm-6.9,102.4l-95.1-95.8c26.7-19.4 64.3-17.1 88.4,7 24.2,24.2 26.5,62.1 6.7,88.8z");

		var gWaiting   = document.getElementById("waiting"); // or other selector like querySelector()
		var rect = gWaiting.getBoundingClientRect(); // get the bounding rectangle
		var waitingSize = { "width":rect.width, "height":rect.height};

		var length = document.querySelector('.path').getTotalLength();
		var styles = document.getElementById("chartStyles");
		styles.appendChild( document.createTextNode("@keyframes dash { to { stroke-dashoffset: "+ (length+100) +"; } }") );

		var scale = 0.3;
		svg.append( "use" )
			.attr( "x", centre.x-(waitingSize.width/2)*scale )
			.attr( "y", centre.y-(waitingSize.height/2)*scale )
			.attr( "transform","scale(0.3)" )
			.attr( "class","clock" )
			.style( "stroke","black" )
			.style( "fill","rgba(0,0,0,0.1)" )
			.style( "stroke-dasharray",length )
			.style( "animation","dash 5s linear alternate infinite" )
			.attr( "xlink:href","#waiting" );


		//  <path d="m436.4,278.3c0-102.3-80-186.1-180-187.2v-28.1h15.6v-20.8h-53.1v20.8h16.6v29.1c-91.2,9.7-163.3,89.8-163.3,186.3 0,64.7 32,121.9 80.8,155.6l-54.8,52 14.3,15.1 58.9-55.9c24.8,13.1 53,20.5 82.8,20.5 30.2,0 58.7-7.6 83.8-21l59.2,56.2 14.3-15.1-55.2-52.4c48.4-33.8 80.1-90.8 80.1-155.1zm-182.1,166.5c-88.4,0-161.3-74.9-161.3-166.5s71.8-166.5 161.3-166.5 161.3,74.9 161.3,166.5-72.9,166.5-161.3,166.5z"/>
		//	<polygon points="256.4,136.9 235.6,136.9 235.6,285.6 315.7,321 324,301.2 256.4,272.1   "/>
		//	<path d="m164.6,37.4c-35.1-35.1-92.1-35.1-127.3,0-35.1,35.1-35.1,92.1 0,127.3 2,2 4.2,3.9 6.3,5.7l126.4-127.2c-1.7-2-3.5-3.9-5.4-5.8zm-120.3,102.4c-19.8-26.7-17.5-64.6 6.7-88.8 24.1-24.1 61.7-26.4 88.4-7l-95.1,95.8z"/>
		//	<path d="m473.7,37.4c-35.1-35.1-92.1-35.1-127.3,0-1.9,1.9-3.7,3.9-5.3,5.9l126.3,127.2c2.2-1.8 4.3-3.7 6.3-5.7 35.2-35.3 35.2-92.3 0-127.4zm-6.9,102.4l-95.1-95.8c26.7-19.4 64.3-17.1 88.4,7 24.2,24.2 26.5,62.1 6.7,88.8z"/>
	}
};