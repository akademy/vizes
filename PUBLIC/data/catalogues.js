/**
 * Created by matthew on 1/26/16.
 */
// Solr: http://127.0.0.1:8983/solr/works/select?indent=on&version=2.2&q=cito\%3ACatalog%3A*&fq=&start=0&rows=0&fl=*%2Cscore&qt=standard&wt=standard&explainOther=&hl.fl=&facet=true&facet.field=cito:Catalog&output=json

//select original_catalogue, count(original_catalogue) as count, min(date_of_work_std_year) as min, greatest(max(date_of_work_std_year),max(date_of_work2_std_year) ) as max from cofk_union_work
//group by original_catalogue
//ORDER BY count
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

// select catalogue_name, count(original_catalogue) as count, min(date_of_work_std_year) as min, greatest(max(date_of_work_std_year),max(date_of_work2_std_year) ) as max from cofk_union_work
// LEFT JOIN cofk_lookup_catalogue ON cofk_union_work.original_catalogue = cofk_lookup_catalogue.catalogue_code
// where cofk_lookup_catalogue.publish_status=1
// group by catalogue_name
// ORDER BY catalogue_name
var catalogueCountsAndDates = [
	["Andreae, Johann Valentin",3715,1630,1654],
	["Aubrey, John",1073,1636,1696],
	["Barlaeus, Caspar",505,1615,1647],
	["Baxter, Richard",8,1657,1659],
	["Beeckman, Isaac",28,1612,1635],
	["Bodleian card catalogue",54620,1508,1900],
	["Brahe, Tycho",500,1568,1601],
	["Comenius, Jan Amos",624,1622,1670],
	["Descartes, René",727,1619,1650],
	["Fermat, Pierre de",125,1630,1664],
	["Franckenberg, Abraham von",85,1617,1652],
	["Gamba collection",261,1566,1837],
	["Graffigny, Françoise de",2524,1716,1759],
	["Gray, Thomas",651,1734,1771],
	["Groot, Hugo de",8034,1594,1645],
	["Hartlib, Samuel",4833,1620,1662],
	["Huygens, Christiaan",3080,1636,1695],
	["Huygens, Constantijn",7120,1608,1687],
	["Kircher, Athanasius",2731,1632,1681],
	["Kircher-related correspondence",55,1592,1677],
	["Leeuwenhoek, Antoni van",282,1673,1707],
	["Lhwyd, Edward",2164,1674,1709],
	["Lister, Martin",1214,1660,1710],
	["Mersenne, Marin",1904,1617,1650],
	["Nierop, Dirck Rembrantsz van",80,1653,1684],
	["No catalogue specified",12,1615,1688],
	["Peiresc, Nicolas-Claude Fabri de",1849,1602,1639],
	["Permeier, Johann",89,1637,1641],
	["Pontanus, Johannes Isacius",321,1595,1639],
	["Sachs von Löwenheim, Philipp Jakob",149,1648,1672],
	["Scaliger, Joseph Justus",1669,1561,1609],
	["Schott, Caspar",28,1656,1665],
	["Selden, John",355,1615,1654],
	["Sidney, Philip",380,1566,1586],
	["Swammerdam, Jan",172,1664,1680],
	["Tixall letters",95,1617,1703],
	["Wallis, John",2002,1641,1703]
];