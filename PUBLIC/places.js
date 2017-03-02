/**
 * Created by matthew on 1/25/16.
 */
( function() {
	var placeDocs = places.response.result.doc;

	var coordinates = [];

	var area = {
		lat : {
			min:0,
			max:0
		},
		long: {
			min:0,
			max:0
		},
	};

	for( var i = 0; i < placeDocs.length; i++ ) {
		var lat = placeDocs[i].str[1]["#text"] * 1;
		var long = placeDocs[i].str[2]["#text"] * 1;
		//var name = placeDocs[i].str[3]["#text"];
		var intensity = 1; // Math.random()

		if( !isNaN(lat) && !isNaN(long) ) {

			coordinates.push( [long, lat, intensity] );

			if( area.lat.min > lat ) { area.lat.min = lat; }
			if( area.lat.max < lat ) { area.lat.max = lat; }
			if( area.long.min > long ) { area.long.min = long; }
			if( area.long.max < long ) { area.long.max = long; }
		}
		else {
			console.log( placeDocs[i] );
		}

	}

	L.mapbox.accessToken = 'pk.eyJ1IjoibW9uaWNhbXMiLCJhIjoiNW4zbEtPRSJ9.9IfutzjZrHdm2ESZTmk8Sw';
	var map = L.mapbox.map('map', 'monicams.jpf4hpo5')
		.setView([
			// Oxford
			//51.75222,
			//-1.25596,
			44.3532,
			11.7168

			//(area.lat.max + area.lat.min) / 2,
			//(area.long.max + area.long.min) / 2],

			],
		2);

	//var heat = L.heatLayer(addressPoints, { maxZoom: 12 }).addTo(map);
	//var heat = L.heatLayer(coordinates, { maxZoom: 2 }).addTo(map);


	L.mapbox.featureLayer({
		// this feature is in the GeoJSON format: see geojson.org
		// for the full specification
		type: 'Feature',
		geometry: {
			type: 'MultiPoint',
			// coordinates here are in longitude, latitude order because
			// x, y is the standard for GeoJSON and many formats
			coordinates: coordinates
		}
	}).addTo(map);


})();