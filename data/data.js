/**
 * Created by sers0034 on 17/12/15.
 */
	// Our data...
var catalogueData = {
	catalogues: [
		{
			name: "Groot, Hugo de",
			count: 8034,
			year: {
				start: 1500,
				end: 1600
			}
		},
		{
			name: "Hartlib, Samuel",
			count: 4718,
			year: {
				start: 1600,
				end: 1800
			}
		},
		{
			name: "Huygens, Constantijn",
			count: 7120,
			year: {
				start: 1700,
				end: 1800
			}
		}
	],
	links : [
		{"source":0, "target":1},
		{"source":1, "target":2}
	]
};

var catalogueDataLarge = {
	catalogues: [

		{
			name: "Bodleian card catalogue",
			count: 48691,
			year: {
				start: 1500,
				end: 1800
			}
		},
		{
			name: "Groot, Hugo de",
			count: 8034,
			year: {
				start: 1500,
				end: 1600
			}
		},
		{
			name: "Huygens, Constantijn",
			count: 7120,
			year: {
				start: 1700,
				end: 1800
			}
		},
		{
			name: "Hartlib, Samuel",
			count: 4718,
			year: {
				start: 1600,
				end: 1800
			}
		},
		{
			name: "Andreae, Johann Valentin",
			count: 3696,
			year: {
				start: 1340,
				end: 1750
			}
		},
		{
			name: "Huygens, Christiaan",
			count: 3080,
			year: {
				start: 1280,
				end: 1830
			}
		},
		{
			name: "Kircher, Athanasius",
			count: 2690,
			year: {
				start: 1067,
				end: 1790
			}
		},
		{
			name: "Graffigny, Fran�oise de",
			count: 2524,
			year: {
				start: 1340,
				end: 1650
			}
		},
		{
			name: "Lhwyd, Edward",
			count: 2128,
			year: {
				start: 1230,
				end: 1340
			}
		},
		{
			name: "Wallis, John",
			count: 2001,
			year: {
				start: 1400,
				end: 1450
			}
		},
		{
			name: "Mersenne, Marin",
			count: 1904,
			year: {
				start: 1400,
				end: 1500
			}
		}
	],
	links : [

	]
};

// Counts split into 10 year gaps
var dataWorkYearCount = {
	"lst": {
		"-name": "started_date_gregorian_sort",
		"int": [
			{
				"-name": "1500-01-01T00:00:00Z",
				"#text": "1"
			},
			{
				"-name": "1510-01-01T00:00:00Z",
				"#text": "2"
			},
			{
				"-name": "1520-01-01T00:00:00Z",
				"#text": "2"
			},
			{
				"-name": "1530-01-01T00:00:00Z",
				"#text": "9"
			},
			{
				"-name": "1540-01-01T00:00:00Z",
				"#text": "6"
			},
			{
				"-name": "1550-01-01T00:00:00Z",
				"#text": "15"
			},
			{
				"-name": "1560-01-01T00:00:00Z",
				"#text": "72"
			},
			{
				"-name": "1570-01-01T00:00:00Z",
				"#text": "500"
			},
			{
				"-name": "1580-01-01T00:00:00Z",
				"#text": "577"
			},
			{
				"-name": "1590-01-01T00:00:00Z",
				"#text": "1160"
			},
			{
				"-name": "1600-01-01T00:00:00Z",
				"#text": "2056"
			},
			{
				"-name": "1610-01-01T00:00:00Z",
				"#text": "1228"
			},
			{
				"-name": "1620-01-01T00:00:00Z",
				"#text": "3286"
			},
			{
				"-name": "1630-01-01T00:00:00Z",
				"#text": "10655"
			},
			{
				"-name": "1640-01-01T00:00:00Z",
				"#text": "14752"
			},
			{
				"-name": "1650-01-01T00:00:00Z",
				"#text": "6288"
			},
			{
				"-name": "1660-01-01T00:00:00Z",
				"#text": "7074"
			},
			{
				"-name": "1670-01-01T00:00:00Z",
				"#text": "5804"
			},
			{
				"-name": "1680-01-01T00:00:00Z",
				"#text": "4435"
			},
			{
				"-name": "1690-01-01T00:00:00Z",
				"#text": "7247"
			},
			{
				"-name": "1700-01-01T00:00:00Z",
				"#text": "5150"
			},
			{
				"-name": "1710-01-01T00:00:00Z",
				"#text": "4107"
			},
			{
				"-name": "1720-01-01T00:00:00Z",
				"#text": "3519"
			},
			{
				"-name": "1730-01-01T00:00:00Z",
				"#text": "4392"
			},
			{
				"-name": "1740-01-01T00:00:00Z",
				"#text": "3186"
			},
			{
				"-name": "1750-01-01T00:00:00Z",
				"#text": "2066"
			},
			{
				"-name": "1760-01-01T00:00:00Z",
				"#text": "1095"
			},
			{
				"-name": "1770-01-01T00:00:00Z",
				"#text": "1071"
			},
			{
				"-name": "1780-01-01T00:00:00Z",
				"#text": "1435"
			},
			{
				"-name": "1790-01-01T00:00:00Z",
				"#text": "975"
			},
			{
				"-name": "1800-01-01T00:00:00Z",
				"#text": "798"
			},
			{
				"-name": "1810-01-01T00:00:00Z",
				"#text": "606"
			},
			{
				"-name": "1820-01-01T00:00:00Z",
				"#text": "265"
			},
			{
				"-name": "1830-01-01T00:00:00Z",
				"#text": "7"
			},
			{
				"-name": "1840-01-01T00:00:00Z",
				"#text": "0"
			},
			{
				"-name": "1850-01-01T00:00:00Z",
				"#text": "0"
			},
			{
				"-name": "1860-01-01T00:00:00Z",
				"#text": "0"
			},
			{
				"-name": "1870-01-01T00:00:00Z",
				"#text": "0"
			},
			{
				"-name": "1880-01-01T00:00:00Z",
				"#text": "0"
			},
			{
				"-name": "1890-01-01T00:00:00Z",
				"#text": "0"
			},
			{
				"-name": "before",
				"#text": "0"
			},
			{
				"-name": "after",
				"#text": "8092"
			},
			{
				"-name": "between",
				"#text": "93809"
			}
		],
		"str": {
			"-name": "gap",
			"#text": "+10YEARS"
		},
		"date": {
			"-name": "end",
			"#text": "1900-01-01T00:00:00Z"
		}
	}
};

var catalogueCounts = {
	"lst": {
	"-name": "cito:Catalog",
		"int": [
		{
			"-name": "Bodleian card catalogue",
			"#text": "48691"
		},
		{
			"-name": "Groot, Hugo de",
			"#text": "8034"
		},
		{
			"-name": "Huygens, Constantijn",
			"#text": "7120"
		},
		{
			"-name": "Hartlib, Samuel",
			"#text": "4718"
		},
		{
			"-name": "Andreae, Johann Valentin",
			"#text": "3696"
		},
		{
			"-name": "Huygens, Christiaan",
			"#text": "3080"
		},
		{
			"-name": "Kircher, Athanasius",
			"#text": "2696"
		},
		{
			"-name": "Graffigny, Françoise de",
			"#text": "2524"
		},
		{
			"-name": "Lhwyd, Edward",
			"#text": "2128"
		},
		{
			"-name": "Wallis, John",
			"#text": "2001"
		},
		{
			"-name": "Mersenne, Marin",
			"#text": "1904"
		},
		{
			"-name": "Peiresc, Nicolas-Claude Fabri de",
			"#text": "1843"
		},
		{
			"-name": "Scaliger, Joseph Justus",
			"#text": "1669"
		},
		{
			"-name": "Lister, Martin",
			"#text": "1212"
		},
		{
			"-name": "Oldenburg, Henry",
			"#text": "1203"
		},
		{
			"-name": "Aubrey, John",
			"#text": "1073"
		},
		{
			"-name": "Solms-Braunfels, Amalia von",
			"#text": "1016"
		},
		{
			"-name": "Bourignon, Antoinette",
			"#text": "940"
		},
		{
			"-name": "Descartes, René",
			"#text": "727"
		},
		{
			"-name": "Gray, Thomas",
			"#text": "651"
		},
		{
			"-name": "Comenius, Jan Amos",
			"#text": "566"
		},
		{
			"-name": "Barlaeus, Caspar",
			"#text": "505"
		},
		{
			"-name": "Brahe, Tycho",
			"#text": "498"
		},
		{
			"-name": "Sidney, Philip",
			"#text": "380"
		},
		{
			"-name": "Selden, John",
			"#text": "355"
		},
		{
			"-name": "Polanus von Polansdorf, Amandus",
			"#text": "325"
		},
		{
			"-name": "Pontanus, Johannes Isacius",
			"#text": "321"
		},
		{
			"-name": "Czech students in Protestant universities (Hrubý)",
			"#text": "290"
		},
		{
			"-name": "Leeuwenhoek, Antoni van",
			"#text": "282"
		},
		{
			"-name": "Kepler, Johannes",
			"#text": "274"
		},
		{
			"-name": "Gamba collection",
			"#text": "261"
		},
		{
			"-name": "Swammerdam, Jan",
			"#text": "172"
		},
		{
			"-name": "Sachs von Löwenheim, Philipp Jakob",
			"#text": "143"
		},
		{
			"-name": "Fermat, Pierre de",
			"#text": "121"
		},
		{
			"-name": "Tixall letters",
			"#text": "95"
		},
		{
			"-name": "Permeier, Johann",
			"#text": "89"
		},
		{
			"-name": "Franckenberg, Abraham von",
			"#text": "85"
		},
		{
			"-name": "Nierop, Dirck Rembrantsz van",
			"#text": "80"
		},
		{
			"-name": "Kircher-related correspondence",
			"#text": "55"
		},
		{
			"-name": "Schott, Caspar",
			"#text": "39"
		},
		{
			"-name": "Beeckman, Isaac",
			"#text": "28"
		},
		{
			"-name": "Baxter, Richard",
			"#text": "8"
		},
		{
			"-name": "No catalogue specified",
			"#text": "3"
		}
	]
}
};