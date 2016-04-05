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
	["Bodleian card catalogue",54620,1508,1829] , // edited from 1900 to 1829
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

//select catalogue_name, count(original_catalogue) as count, date_of_work_std_year as min from cofk_union_work
//LEFT JOIN cofk_lookup_catalogue ON cofk_union_work.original_catalogue = cofk_lookup_catalogue.catalogue_code
//where cofk_lookup_catalogue.publish_status=1
//group by catalogue_name, date_of_work_std_year
//ORDER BY catalogue_name;
var catalogueYearsCount = [
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 2,
		"year": 1630
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 38,
		"year": 1638
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 128,
		"year": 1653
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 109,
		"year": 1639
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 149,
		"year": 1641
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 230,
		"year": 1650
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 267,
		"year": 1648
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 260,
		"year": 1652
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 241,
		"year": 1647
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 35,
		"year": 1636
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 3,
		"year": 1633
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 274,
		"year": 1645
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 137,
		"year": 1640
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 269,
		"year": 1646
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 1,
		"year": 1632
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 349,
		"year": 1644
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 20,
		"year": 1634
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 60,
		"year": 1637
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 219,
		"year": 1651
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 69,
		"year": 1635
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 304,
		"year": 1643
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 29,
		"year": 1654
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 190,
		"year": 1642
	},
	{
		"Catalogue": "Andreae, Johann Valentin",
		"number": 332,
		"year": 1649
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 46,
		"year": 1676
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 40,
		"year": 1691
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 5,
		"year": 1665
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 43,
		"year": 1672
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1646
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 5,
		"year": 1662
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 7,
		"year": 1663
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 15,
		"year": 1687
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1644
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 9,
		"year": 1670
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1650
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 38,
		"year": 1674
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 13,
		"year": 1653
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 43,
		"year": 1675
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 4,
		"year": 1667
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 141,
		"year": "NULL"
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 24,
		"year": 1684
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 3,
		"year": 1654
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 22,
		"year": 1689
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 20,
		"year": 1695
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 8,
		"year": 1668
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 5,
		"year": 1651
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 22,
		"year": 1682
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 40,
		"year": 1680
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 14,
		"year": 1664
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 3,
		"year": 1656
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 49,
		"year": 1694
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1659
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1645
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 30,
		"year": 1679
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 5,
		"year": 1652
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 60,
		"year": 1673
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1666
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 9,
		"year": 1696
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 23,
		"year": 1683
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 12,
		"year": 1688
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 11,
		"year": 1661
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 34,
		"year": 1692
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 24,
		"year": 1671
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 31,
		"year": 1677
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 59,
		"year": 1693
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 6,
		"year": 1649
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1636
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 41,
		"year": 1678
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 1,
		"year": 1643
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 4,
		"year": 1660
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 39,
		"year": 1681
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 12,
		"year": 1686
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 11,
		"year": 1690
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 22,
		"year": 1685
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 4,
		"year": 1655
	},
	{
		"Catalogue": "Aubrey, John",
		"number": 9,
		"year": 1669
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 23,
		"year": 1625
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 26,
		"year": 1627
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 29,
		"year": 1639
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 1,
		"year": 1647
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 1,
		"year": "NULL"
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 14,
		"year": 1645
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 31,
		"year": 1628
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 10,
		"year": 1646
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 31,
		"year": 1630
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 29,
		"year": 1629
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 11,
		"year": 1638
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 32,
		"year": 1631
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 11,
		"year": 1640
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 24,
		"year": 1633
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 3,
		"year": 1619
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 43,
		"year": 1635
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 18,
		"year": 1641
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 6,
		"year": 1643
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 8,
		"year": 1624
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 16,
		"year": 1637
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 1,
		"year": 1620
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 26,
		"year": 1642
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 8,
		"year": 1644
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 43,
		"year": 1634
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 12,
		"year": 1626
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 36,
		"year": 1636
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 2,
		"year": 1615
	},
	{
		"Catalogue": "Barlaeus, Caspar",
		"number": 10,
		"year": 1632
	},
	{
		"Catalogue": "Baxter, Richard",
		"number": 1,
		"year": 1659
	},
	{
		"Catalogue": "Baxter, Richard",
		"number": 3,
		"year": 1657
	},
	{
		"Catalogue": "Baxter, Richard",
		"number": 4,
		"year": 1658
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 7,
		"year": 1619
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 2,
		"year": 1632
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 1,
		"year": 1633
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 1,
		"year": 1634
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 2,
		"year": 1624
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 1,
		"year": 1631
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 6,
		"year": 1629
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 1,
		"year": 1613
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 2,
		"year": 1612
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 4,
		"year": 1630
	},
	{
		"Catalogue": "Beeckman, Isaac",
		"number": 1,
		"year": 1635
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 3,
		"year": 1561
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 55,
		"year": 1818
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 108,
		"year": 1799
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 14,
		"year": 1575
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 433,
		"year": 1732
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 81,
		"year": 1779
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 17,
		"year": 1592
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 4,
		"year": 1552
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 53,
		"year": 1621
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 271,
		"year": 1678
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 150,
		"year": 1640
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 402,
		"year": 1735
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 8,
		"year": 1584
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 13,
		"year": 1591
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 37,
		"year": 1613
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 340,
		"year": 1713
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 320,
		"year": 1684
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1536
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 100,
		"year": 1662
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 38,
		"year": 1756
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 36,
		"year": 1816
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 78,
		"year": 1650
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 6,
		"year": 1578
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 78,
		"year": 1795
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 5,
		"year": 1563
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 450,
		"year": 1697
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 19,
		"year": 1600
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1515
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 254,
		"year": 1741
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 312,
		"year": 1726
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 48,
		"year": 1813
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 13,
		"year": 1590
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 31,
		"year": 1587
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 294,
		"year": 1710
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 65,
		"year": 1766
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 6,
		"year": 1581
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 179,
		"year": 1665
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 2,
		"year": 1538
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 108,
		"year": 1663
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 49,
		"year": 1622
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 91,
		"year": 1791
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 103,
		"year": 1781
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 31,
		"year": 1824
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 79,
		"year": 1624
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 3,
		"year": 1548
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 12807,
		"year": "NULL"
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 95,
		"year": 1811
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 14,
		"year": 1603
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 63,
		"year": 1764
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 414,
		"year": 1727
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 77,
		"year": 1801
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 60,
		"year": 1657
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 344,
		"year": 1739
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 3,
		"year": 1532
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 241,
		"year": 1671
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 192,
		"year": 1644
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 87,
		"year": 1661
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 72,
		"year": 1789
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 427,
		"year": 1696
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 16,
		"year": 1596
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 78,
		"year": 1626
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 434,
		"year": 1709
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 316,
		"year": 1785
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 98,
		"year": 1653
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 38,
		"year": 1817
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 40,
		"year": 1821
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 51,
		"year": 1820
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 33,
		"year": 1823
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 403,
		"year": 1711
	},
	/*{ // This no longer appears in the main database
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1900
	},*/
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 15,
		"year": 1589
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 124,
		"year": 1774
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 85,
		"year": 1748
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 183,
		"year": 1667
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 274,
		"year": 1681
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 380,
		"year": 1690
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 12,
		"year": 1569
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 104,
		"year": 1754
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 16,
		"year": 1604
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 332,
		"year": 1702
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 68,
		"year": 1758
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 5,
		"year": 1571
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 430,
		"year": 1715
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 366,
		"year": 1736
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 149,
		"year": 1651
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 4,
		"year": 1570
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 478,
		"year": 1708
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 98,
		"year": 1782
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 174,
		"year": 1787
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 112,
		"year": 1772
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 10,
		"year": 1606
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1827
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 104,
		"year": 1780
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 563,
		"year": 1695
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 331,
		"year": 1705
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 230,
		"year": 1742
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 456,
		"year": 1691
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 10,
		"year": 1582
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 36,
		"year": 1757
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 13,
		"year": 1599
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 7,
		"year": 1605
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1829
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 18,
		"year": 1572
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 14,
		"year": 1579
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 60,
		"year": 1654
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 127,
		"year": 1635
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 177,
		"year": 1669
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 103,
		"year": 1770
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 55,
		"year": 1623
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 62,
		"year": 1814
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 38,
		"year": 1615
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 63,
		"year": 1805
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 119,
		"year": 1637
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 181,
		"year": 1666
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 132,
		"year": 1775
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 411,
		"year": 1699
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 90,
		"year": 1808
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 231,
		"year": 1675
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 254,
		"year": 1724
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 109,
		"year": 1788
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 152,
		"year": 1636
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1508
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 54,
		"year": 1618
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 346,
		"year": 1721
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 344,
		"year": 1714
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 17,
		"year": 1594
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 92,
		"year": 1619
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 246,
		"year": 1643
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1551
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 44,
		"year": 1611
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 502,
		"year": 1698
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 84,
		"year": 1777
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 27,
		"year": 1573
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 18,
		"year": 1607
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 33,
		"year": 1595
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 477,
		"year": 1729
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 268,
		"year": 1672
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 2,
		"year": 1554
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 116,
		"year": 1784
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 51,
		"year": 1612
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 23,
		"year": 1598
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 137,
		"year": 1631
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 3,
		"year": 1567
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 104,
		"year": 1792
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 151,
		"year": 1630
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 59,
		"year": 1765
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 15,
		"year": 1826
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 2,
		"year": 1528
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 293,
		"year": 1725
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 102,
		"year": 1771
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 54,
		"year": 1656
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 277,
		"year": 1723
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 39,
		"year": 1755
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 451,
		"year": 1717
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 178,
		"year": 1744
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 570,
		"year": 1694
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 93,
		"year": 1809
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 381,
		"year": 1704
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 75,
		"year": 1804
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 54,
		"year": 1759
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 78,
		"year": 1800
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 152,
		"year": 1632
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 78,
		"year": 1747
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 132,
		"year": 1628
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 46,
		"year": 1614
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 441,
		"year": 1734
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 275,
		"year": 1680
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 195,
		"year": 1647
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 3,
		"year": 1537
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 55,
		"year": 1815
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 122,
		"year": 1746
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 97,
		"year": 1659
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 91,
		"year": 1627
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 441,
		"year": 1737
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 216,
		"year": 1676
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 71,
		"year": 1625
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 106,
		"year": 1753
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 350,
		"year": 1728
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 401,
		"year": 1689
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 90,
		"year": 1798
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 483,
		"year": 1692
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 42,
		"year": 1658
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 30,
		"year": 1609
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 289,
		"year": 1722
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 140,
		"year": 1633
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 114,
		"year": 1760
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 16,
		"year": 1602
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 43,
		"year": 1819
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 421,
		"year": 1693
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 90,
		"year": 1649
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 81,
		"year": 1761
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 353,
		"year": 1738
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 245,
		"year": 1674
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 52,
		"year": 1812
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 146,
		"year": 1639
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 73,
		"year": 1767
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 9,
		"year": 1562
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 457,
		"year": 1733
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 81,
		"year": 1793
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 16,
		"year": 1597
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 100,
		"year": 1802
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 98,
		"year": 1629
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 20,
		"year": 1825
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 7,
		"year": 1564
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 3,
		"year": 1553
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 351,
		"year": 1701
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1516
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 55,
		"year": 1762
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 73,
		"year": 1806
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 83,
		"year": 1794
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 12,
		"year": 1588
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 40,
		"year": 1616
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 102,
		"year": 1790
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 317,
		"year": 1646
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 55,
		"year": 1778
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 282,
		"year": 1706
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 451,
		"year": 1707
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 2,
		"year": 1546
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 98,
		"year": 1776
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 18,
		"year": 1585
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 7,
		"year": 1565
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 278,
		"year": 1686
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 469,
		"year": 1719
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 13,
		"year": 1577
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 273,
		"year": 1679
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 497,
		"year": 1720
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 107,
		"year": 1763
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 34,
		"year": 1610
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 42,
		"year": 1617
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 182,
		"year": 1645
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 3,
		"year": 1556
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 114,
		"year": 1634
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 176,
		"year": 1664
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 154,
		"year": 1750
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 226,
		"year": 1641
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 127,
		"year": 1751
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 20,
		"year": 1574
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1559
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 111,
		"year": 1752
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 52,
		"year": 1660
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 466,
		"year": 1718
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1550
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 429,
		"year": 1688
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 9,
		"year": 1593
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 179,
		"year": 1638
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 190,
		"year": 1668
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 89,
		"year": 1773
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 278,
		"year": 1683
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 236,
		"year": 1743
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 124,
		"year": 1769
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 179,
		"year": 1670
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 13,
		"year": 1566
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 1,
		"year": 1547
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 2,
		"year": 1828
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 153,
		"year": 1749
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 114,
		"year": 1768
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 103,
		"year": 1810
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 326,
		"year": 1740
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 88,
		"year": 1783
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 25,
		"year": 1601
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 280,
		"year": 1687
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 73,
		"year": 1807
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 487,
		"year": 1716
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 24,
		"year": 1608
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 393,
		"year": 1712
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 359,
		"year": 1685
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 293,
		"year": 1673
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 27,
		"year": 1586
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 399,
		"year": 1730
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 57,
		"year": 1822
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 56,
		"year": 1803
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 9,
		"year": 1580
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 259,
		"year": 1682
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 7,
		"year": 1576
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 63,
		"year": 1620
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 194,
		"year": 1677
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 53,
		"year": 1655
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 108,
		"year": 1797
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 250,
		"year": 1648
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 351,
		"year": 1700
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 243,
		"year": 1786
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 95,
		"year": 1796
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 6,
		"year": 1583
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 164,
		"year": 1745
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 372,
		"year": 1703
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 424,
		"year": 1731
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 118,
		"year": 1652
	},
	{
		"Catalogue": "Bodleian card catalogue",
		"number": 232,
		"year": 1642
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 11,
		"year": 1586
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 7,
		"year": 1573
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 23,
		"year": 1597
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 25,
		"year": 1601
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 13,
		"year": 1591
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 8,
		"year": 1593
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 12,
		"year": 1576
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 8,
		"year": 1596
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 58,
		"year": 1598
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 7,
		"year": 1579
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 2,
		"year": 1578
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 1,
		"year": 1583
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 23,
		"year": 1592
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 2,
		"year": 1582
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 16,
		"year": 1588
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 3,
		"year": 1580
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 8,
		"year": 1594
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 2,
		"year": 1571
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 4,
		"year": 1577
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 2,
		"year": 1581
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 10,
		"year": 1585
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 12,
		"year": 1587
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 6,
		"year": 1575
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 1,
		"year": 1574
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 3,
		"year": 1595
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 21,
		"year": 1589
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 27,
		"year": 1590
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 1,
		"year": 1568
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 6,
		"year": 1572
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 7,
		"year": 1584
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 40,
		"year": 1599
	},
	{
		"Catalogue": "Brahe, Tycho",
		"number": 131,
		"year": 1600
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 24,
		"year": 1661
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 4,
		"year": 1631
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 14,
		"year": 1650
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 16,
		"year": 1668
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 5,
		"year": 1654
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 14,
		"year": 1664
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 2,
		"year": 1637
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 23,
		"year": 1643
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 1,
		"year": 1636
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 5,
		"year": 1670
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 14,
		"year": 1655
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 3,
		"year": 1635
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 26,
		"year": 1642
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 5,
		"year": 1652
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 12,
		"year": 1660
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 1,
		"year": 1623
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 13,
		"year": 1669
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 10,
		"year": 1638
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 17,
		"year": 1641
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 5,
		"year": 1634
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 43,
		"year": 1645
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 16,
		"year": 1648
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 13,
		"year": 1666
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 8,
		"year": 1667
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 18,
		"year": 1646
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 16,
		"year": 1649
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 4,
		"year": 1651
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 16,
		"year": 1640
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 5,
		"year": 1665
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 12,
		"year": 1639
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 52,
		"year": 1657
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 17,
		"year": 1663
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 7,
		"year": 1629
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 1,
		"year": 1622
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 1,
		"year": 1653
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 15,
		"year": "NULL"
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 19,
		"year": 1644
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 10,
		"year": 1659
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 19,
		"year": 1633
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 40,
		"year": 1658
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 14,
		"year": 1662
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 9,
		"year": 1632
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 23,
		"year": 1647
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 1,
		"year": 1628
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 19,
		"year": 1656
	},
	{
		"Catalogue": "Comenius, Jan Amos",
		"number": 12,
		"year": 1630
	},
	{
		"Catalogue": "Descartes, René",
		"number": 1,
		"year": 1626
	},
	{
		"Catalogue": "Descartes, René",
		"number": 61,
		"year": 1645
	},
	{
		"Catalogue": "Descartes, René",
		"number": 37,
		"year": 1648
	},
	{
		"Catalogue": "Descartes, René",
		"number": 15,
		"year": 1630
	},
	{
		"Catalogue": "Descartes, René",
		"number": 40,
		"year": 1642
	},
	{
		"Catalogue": "Descartes, René",
		"number": 6,
		"year": 1619
	},
	{
		"Catalogue": "Descartes, René",
		"number": 15,
		"year": "NULL"
	},
	{
		"Catalogue": "Descartes, René",
		"number": 60,
		"year": 1643
	},
	{
		"Catalogue": "Descartes, René",
		"number": 10,
		"year": 1636
	},
	{
		"Catalogue": "Descartes, René",
		"number": 1,
		"year": 1623
	},
	{
		"Catalogue": "Descartes, René",
		"number": 10,
		"year": 1629
	},
	{
		"Catalogue": "Descartes, René",
		"number": 44,
		"year": 1637
	},
	{
		"Catalogue": "Descartes, René",
		"number": 61,
		"year": 1638
	},
	{
		"Catalogue": "Descartes, René",
		"number": 2,
		"year": 1628
	},
	{
		"Catalogue": "Descartes, René",
		"number": 39,
		"year": 1639
	},
	{
		"Catalogue": "Descartes, René",
		"number": 44,
		"year": 1647
	},
	{
		"Catalogue": "Descartes, René",
		"number": 35,
		"year": 1644
	},
	{
		"Catalogue": "Descartes, René",
		"number": 58,
		"year": 1646
	},
	{
		"Catalogue": "Descartes, René",
		"number": 9,
		"year": 1632
	},
	{
		"Catalogue": "Descartes, René",
		"number": 5,
		"year": 1633
	},
	{
		"Catalogue": "Descartes, René",
		"number": 2,
		"year": 1622
	},
	{
		"Catalogue": "Descartes, René",
		"number": 39,
		"year": 1641
	},
	{
		"Catalogue": "Descartes, René",
		"number": 8,
		"year": 1631
	},
	{
		"Catalogue": "Descartes, René",
		"number": 3,
		"year": 1650
	},
	{
		"Catalogue": "Descartes, René",
		"number": 7,
		"year": 1634
	},
	{
		"Catalogue": "Descartes, René",
		"number": 1,
		"year": 1625
	},
	{
		"Catalogue": "Descartes, René",
		"number": 56,
		"year": 1640
	},
	{
		"Catalogue": "Descartes, René",
		"number": 10,
		"year": 1635
	},
	{
		"Catalogue": "Descartes, René",
		"number": 48,
		"year": 1649
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 2,
		"year": 1664
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 6,
		"year": 1637
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 18,
		"year": 1636
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 9,
		"year": 1643
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 5,
		"year": 1659
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 3,
		"year": 1662
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 9,
		"year": 1640
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 5,
		"year": 1641
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 3,
		"year": 1661
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": 1645
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": 1646
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 11,
		"year": 1657
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": "NULL"
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": 1644
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 11,
		"year": 1638
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 5,
		"year": 1660
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": 1639
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": 1630
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": 1651
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 1,
		"year": 1642
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 4,
		"year": 1656
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 11,
		"year": 1654
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 11,
		"year": 1658
	},
	{
		"Catalogue": "Fermat, Pierre de",
		"number": 4,
		"year": 1648
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 3,
		"year": 1641
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 1,
		"year": 1636
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 12,
		"year": 1651
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 1,
		"year": 1617
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 8,
		"year": 1650
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 4,
		"year": 1637
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 2,
		"year": 1634
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 8,
		"year": 1643
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 4,
		"year": 1638
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 6,
		"year": 1640
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 5,
		"year": 1635
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 1,
		"year": 1645
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 3,
		"year": 1647
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 8,
		"year": 1649
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 2,
		"year": 1639
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 2,
		"year": 1646
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 5,
		"year": 1648
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 3,
		"year": 1642
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 2,
		"year": 1644
	},
	{
		"Catalogue": "Franckenberg, Abraham von",
		"number": 5,
		"year": 1652
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1594
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1803
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1580
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1822
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1736
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1708
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1688
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1758
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1715
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1754
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1734
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1809
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1747
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1797
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1800
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1759
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1771
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1725
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1804
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1717
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1777
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1731
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1583
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1792
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1807
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1716
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1719
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1607
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1729
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1811
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1833
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1584
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1744
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1750
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1752
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1818
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1743
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1802
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1823
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1776
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1785
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1793
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1790
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1773
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1674
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1830
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1751
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1733
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1692
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1767
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1761
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1791
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1671
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1801
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1706
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1730
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1721
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1755
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1589
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1713
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1815
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1746
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1812
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1774
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1753
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1756
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1585
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1625
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1765
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1831
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1819
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1794
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1680
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1769
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1738
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1813
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1762
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1778
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1687
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1820
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1624
	},
	{
		"Catalogue": "Gamba collection",
		"number": 5,
		"year": 1789
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1603
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1666
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1798
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1693
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1739
	},
	{
		"Catalogue": "Gamba collection",
		"number": 8,
		"year": "NULL"
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1682
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1722
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1635
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1837
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1786
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1760
	},
	{
		"Catalogue": "Gamba collection",
		"number": 5,
		"year": 1796
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1643
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1622
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1663
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1766
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1726
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1816
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1686
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1741
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1763
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1795
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1621
	},
	{
		"Catalogue": "Gamba collection",
		"number": 6,
		"year": 1779
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1799
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1732
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1673
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1740
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1712
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1749
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1828
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1814
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1770
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1829
	},
	{
		"Catalogue": "Gamba collection",
		"number": 3,
		"year": 1599
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1805
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1691
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1780
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1772
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1742
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1566
	},
	{
		"Catalogue": "Gamba collection",
		"number": 2,
		"year": 1782
	},
	{
		"Catalogue": "Gamba collection",
		"number": 4,
		"year": 1788
	},
	{
		"Catalogue": "Gamba collection",
		"number": 1,
		"year": 1619
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 68,
		"year": 1756
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 156,
		"year": 1750
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 1,
		"year": 1720
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 48,
		"year": 1757
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 152,
		"year": 1749
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 154,
		"year": 1744
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 109,
		"year": 1740
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 1,
		"year": 1725
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 7,
		"year": 1736
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 1,
		"year": 1727
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 157,
		"year": 1746
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 94,
		"year": 1741
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 15,
		"year": 1735
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 161,
		"year": 1739
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 1,
		"year": 1733
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 1,
		"year": 1717
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 87,
		"year": 1758
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 113,
		"year": 1754
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 120,
		"year": 1747
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 11,
		"year": 1759
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 125,
		"year": 1748
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 150,
		"year": 1745
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 1,
		"year": 1716
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 98,
		"year": 1755
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 129,
		"year": 1753
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 46,
		"year": 1738
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 131,
		"year": 1743
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 158,
		"year": 1751
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 1,
		"year": 1719
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 157,
		"year": 1752
	},
	{
		"Catalogue": "Graffigny, Françoise de",
		"number": 71,
		"year": 1742
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 2,
		"year": 1745
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 13,
		"year": 1762
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 16,
		"year": 1738
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 15,
		"year": 1742
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 11,
		"year": 1751
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 29,
		"year": 1767
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 25,
		"year": 1761
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 14,
		"year": 1766
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 10,
		"year": 1752
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 31,
		"year": 1768
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 5,
		"year": 1748
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 24,
		"year": 1760
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 2,
		"year": 1743
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 21,
		"year": 1740
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 25,
		"year": 1759
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 16,
		"year": 1753
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 18,
		"year": 1755
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 43,
		"year": 1770
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 13,
		"year": 1746
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 12,
		"year": 1737
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 19,
		"year": 1756
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 31,
		"year": 1758
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 12,
		"year": 1754
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 1,
		"year": 1744
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 7,
		"year": 1741
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 14,
		"year": 1735
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 37,
		"year": 1757
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 23,
		"year": 1739
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 7,
		"year": 1734
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 5,
		"year": 1750
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 18,
		"year": 1764
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 19,
		"year": 1736
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 23,
		"year": 1765
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 15,
		"year": 1747
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 20,
		"year": 1763
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 25,
		"year": 1771
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 5,
		"year": 1749
	},
	{
		"Catalogue": "Gray, Thomas",
		"number": 25,
		"year": 1769
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 517,
		"year": 1636
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 68,
		"year": 1634
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 42,
		"year": 1618
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 12,
		"year": 1603
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 583,
		"year": 1641
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 60,
		"year": 1615
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 60,
		"year": 1623
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 241,
		"year": 1645
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 49,
		"year": 1609
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 118,
		"year": 1621
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 502,
		"year": 1642
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 120,
		"year": 1629
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 70,
		"year": 1613
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 41,
		"year": 1612
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 14,
		"year": 1605
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 9,
		"year": 1599
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 580,
		"year": 1640
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 65,
		"year": 1617
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 119,
		"year": 1625
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 22,
		"year": 1606
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 487,
		"year": 1635
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 7,
		"year": 1600
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 564,
		"year": 1639
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 73,
		"year": 1626
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 97,
		"year": 1627
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 622,
		"year": 1644
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 544,
		"year": 1638
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 14,
		"year": "NULL"
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 109,
		"year": 1622
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 12,
		"year": 1602
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 83,
		"year": 1614
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 103,
		"year": 1633
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 159,
		"year": 1628
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 5,
		"year": 1597
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 2,
		"year": 1594
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 16,
		"year": 1619
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 10,
		"year": 1601
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 97,
		"year": 1632
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 3,
		"year": 1598
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 634,
		"year": 1643
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 159,
		"year": 1631
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 77,
		"year": 1624
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 52,
		"year": 1608
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 530,
		"year": 1637
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 14,
		"year": 1604
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 114,
		"year": 1630
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 18,
		"year": 1620
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 18,
		"year": 1607
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 29,
		"year": 1610
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 59,
		"year": 1616
	},
	{
		"Catalogue": "Groot, Hugo de",
		"number": 31,
		"year": 1611
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 96,
		"year": 1641
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 83,
		"year": 1633
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 273,
		"year": 1659
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 297,
		"year": 1658
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 124,
		"year": 1644
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 36,
		"year": 1632
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 87,
		"year": 1650
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 182,
		"year": 1661
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 117,
		"year": 1637
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 207,
		"year": 1654
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 113,
		"year": 1636
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 86,
		"year": 1643
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 253,
		"year": 1655
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 1,
		"year": 1620
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 99,
		"year": 1635
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 131,
		"year": 1642
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 84,
		"year": 1652
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 134,
		"year": 1638
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 130,
		"year": 1660
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 14,
		"year": 1630
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 2,
		"year": 1623
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 93,
		"year": 1634
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 136,
		"year": 1645
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 183,
		"year": 1648
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 2,
		"year": 1624
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 110,
		"year": 1646
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 182,
		"year": 1656
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 108,
		"year": 1649
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 1,
		"year": 1621
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 188,
		"year": 1640
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 15,
		"year": 1628
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 15,
		"year": 1662
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 214,
		"year": 1657
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 150,
		"year": 1647
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 135,
		"year": 1639
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 3,
		"year": 1625
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 8,
		"year": 1629
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 110,
		"year": 1651
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 1,
		"year": 1622
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 24,
		"year": 1631
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 494,
		"year": "NULL"
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 110,
		"year": 1653
	},
	{
		"Catalogue": "Hartlib, Samuel",
		"number": 2,
		"year": 1626
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 30,
		"year": 1680
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 7,
		"year": 1695
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 19,
		"year": 1647
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 24,
		"year": 1646
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 24,
		"year": 1653
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 9,
		"year": 1644
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 78,
		"year": 1668
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 62,
		"year": 1666
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 86,
		"year": 1657
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 113,
		"year": 1663
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 53,
		"year": 1684
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 34,
		"year": "NULL"
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 79,
		"year": 1675
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 15,
		"year": 1677
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 4,
		"year": 1643
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 212,
		"year": 1665
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 25,
		"year": 1648
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 23,
		"year": 1650
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 60,
		"year": 1687
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 41,
		"year": 1652
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 135,
		"year": 1662
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 1,
		"year": 1636
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 104,
		"year": 1690
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 108,
		"year": 1664
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 1,
		"year": 1641
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 33,
		"year": 1682
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 42,
		"year": 1678
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 41,
		"year": 1654
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 18,
		"year": 1688
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 9,
		"year": 1640
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 43,
		"year": 1655
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 3,
		"year": 1637
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 67,
		"year": 1673
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 42,
		"year": 1683
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 33,
		"year": 1670
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 71,
		"year": 1691
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 1,
		"year": 1638
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 58,
		"year": 1693
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 98,
		"year": 1669
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 134,
		"year": 1660
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 46,
		"year": 1694
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 38,
		"year": 1686
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 14,
		"year": 1649
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 61,
		"year": 1672
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 17,
		"year": 1681
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 39,
		"year": 1685
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 131,
		"year": 1661
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 118,
		"year": 1656
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 4,
		"year": 1642
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 37,
		"year": 1671
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 22,
		"year": 1674
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 51,
		"year": 1679
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 20,
		"year": 1651
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 7,
		"year": 1645
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 10,
		"year": 1639
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 49,
		"year": 1667
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 63,
		"year": 1692
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 19,
		"year": 1676
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 152,
		"year": 1659
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 116,
		"year": 1658
	},
	{
		"Catalogue": "Huygens, Christiaan",
		"number": 26,
		"year": 1689
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 14,
		"year": 1681
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 49,
		"year": 1625
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 119,
		"year": 1651
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 105,
		"year": 1649
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 4,
		"year": 1616
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 6,
		"year": 1609
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 39,
		"year": 1624
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 67,
		"year": 1650
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 12,
		"year": 1684
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 41,
		"year": 1667
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 27,
		"year": 1677
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 67,
		"year": 1661
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 41,
		"year": 1671
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 4,
		"year": 1687
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 167,
		"year": 1648
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 1,
		"year": 1608
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 21,
		"year": 1682
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 50,
		"year": 1668
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 85,
		"year": 1666
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 37,
		"year": 1675
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 17,
		"year": 1619
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 39,
		"year": 1679
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 371,
		"year": 1645
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 198,
		"year": 1634
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 5,
		"year": 1610
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 57,
		"year": 1654
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 323,
		"year": 1641
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 175,
		"year": 1664
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 262,
		"year": 1637
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 9,
		"year": 1683
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 228,
		"year": 1643
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 19,
		"year": 1618
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 181,
		"year": 1636
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 20,
		"year": 1617
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 2,
		"year": 1615
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 48,
		"year": 1669
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 14,
		"year": 1623
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 36,
		"year": 1670
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 235,
		"year": 1638
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 53,
		"year": 1655
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 44,
		"year": 1660
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 4,
		"year": 1685
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 14,
		"year": 1686
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 22,
		"year": 1620
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 51,
		"year": 1673
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 415,
		"year": 1644
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 277,
		"year": 1635
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 33,
		"year": 1626
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 59,
		"year": 1653
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 16,
		"year": "NULL"
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 80,
		"year": 1622
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 201,
		"year": 1663
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 42,
		"year": 1657
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 117,
		"year": 1665
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 23,
		"year": 1621
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 303,
		"year": 1640
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 30,
		"year": 1678
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 260,
		"year": 1662
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 2,
		"year": 1613
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 267,
		"year": 1639
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 64,
		"year": 1629
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 34,
		"year": 1674
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 29,
		"year": 1659
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 50,
		"year": 1627
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 111,
		"year": 1633
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 22,
		"year": 1680
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 35,
		"year": 1658
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 33,
		"year": 1676
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 100,
		"year": 1632
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 204,
		"year": 1647
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 34,
		"year": 1628
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 272,
		"year": 1642
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 75,
		"year": 1656
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 91,
		"year": 1630
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 56,
		"year": 1672
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 57,
		"year": 1652
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 266,
		"year": 1646
	},
	{
		"Catalogue": "Huygens, Constantijn",
		"number": 79,
		"year": 1631
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 66,
		"year": 1648
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 61,
		"year": 1669
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 59,
		"year": 1663
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 64,
		"year": 1676
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 62,
		"year": 1660
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 88,
		"year": 1653
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 57,
		"year": 1670
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 21,
		"year": 1639
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 130,
		"year": 1666
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 59,
		"year": 1675
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 127,
		"year": 1665
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 43,
		"year": 1646
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 28,
		"year": 1644
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 87,
		"year": 1651
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 51,
		"year": 1673
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 54,
		"year": 1656
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 4,
		"year": 1632
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 15,
		"year": 1633
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 13,
		"year": 1634
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 39,
		"year": 1649
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 62,
		"year": 1667
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 60,
		"year": 1661
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 12,
		"year": 1635
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 68,
		"year": 1647
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 17,
		"year": 1637
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 17,
		"year": 1679
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 3,
		"year": 1680
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 85,
		"year": 1664
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 75,
		"year": 1671
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 19,
		"year": 1641
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 47,
		"year": 1662
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 58,
		"year": 1659
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 24,
		"year": 1643
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 32,
		"year": 1645
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 41,
		"year": 1642
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 17,
		"year": 1638
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 88,
		"year": 1655
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 78,
		"year": 1672
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 74,
		"year": 1652
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 51,
		"year": 1677
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 9,
		"year": 1636
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 1,
		"year": 1681
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 44,
		"year": 1674
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 89,
		"year": 1650
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 46,
		"year": 1640
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 39,
		"year": 1658
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 28,
		"year": 1678
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 66,
		"year": 1654
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 32,
		"year": 1657
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 241,
		"year": "NULL"
	},
	{
		"Catalogue": "Kircher, Athanasius",
		"number": 80,
		"year": 1668
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 4,
		"year": 1640
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 3,
		"year": 1649
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 6,
		"year": "NULL"
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1677
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1609
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 3,
		"year": 1661
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1669
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1651
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 2,
		"year": 1666
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1608
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1592
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 3,
		"year": 1663
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1650
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1657
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1660
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 2,
		"year": 1647
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 2,
		"year": 1642
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1629
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1658
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1635
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 3,
		"year": 1667
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1613
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 2,
		"year": 1600
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1655
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1653
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 3,
		"year": 1664
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1602
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1630
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1646
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1662
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 2,
		"year": 1643
	},
	{
		"Catalogue": "Kircher-related correspondence",
		"number": 1,
		"year": 1606
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 4,
		"year": 1707
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 14,
		"year": 1694
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 6,
		"year": 1688
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 8,
		"year": 1693
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 22,
		"year": 1695
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 14,
		"year": 1701
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 9,
		"year": 1697
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 3,
		"year": 1673
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 7,
		"year": 1702
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 8,
		"year": 1705
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 12,
		"year": 1679
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 2,
		"year": 1691
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 12,
		"year": 1680
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 15,
		"year": 1700
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 5,
		"year": 1678
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 20,
		"year": 1696
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 1,
		"year": 1681
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 7,
		"year": 1685
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 3,
		"year": 1682
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 9,
		"year": 1704
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 10,
		"year": 1692
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 11,
		"year": 1674
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 7,
		"year": 1677
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 10,
		"year": 1699
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 8,
		"year": 1686
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 3,
		"year": 1689
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 10,
		"year": 1683
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 10,
		"year": 1676
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 5,
		"year": 1703
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 7,
		"year": 1698
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 9,
		"year": 1687
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 5,
		"year": 1675
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 4,
		"year": 1706
	},
	{
		"Catalogue": "Leeuwenhoek, Antoni van",
		"number": 2,
		"year": 1684
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 118,
		"year": 1693
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 136,
		"year": 1704
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 1,
		"year": 1680
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 81,
		"year": 1708
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 1,
		"year": 1674
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 1,
		"year": 1684
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 5,
		"year": 1685
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 146,
		"year": 1701
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 75,
		"year": 1692
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 130,
		"year": 1696
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 97,
		"year": 1700
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 39,
		"year": 1709
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 10,
		"year": 1686
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 35,
		"year": 1690
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 151,
		"year": 1695
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 3,
		"year": 1687
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 32,
		"year": "NULL"
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 58,
		"year": 1705
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 43,
		"year": 1706
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 70,
		"year": 1699
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 163,
		"year": 1697
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 66,
		"year": 1707
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 1,
		"year": 1683
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 133,
		"year": 1702
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 204,
		"year": 1703
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 20,
		"year": 1689
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 51,
		"year": 1691
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 152,
		"year": 1698
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 6,
		"year": 1688
	},
	{
		"Catalogue": "Lhwyd, Edward",
		"number": 136,
		"year": 1694
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 7,
		"year": 1703
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 1,
		"year": 1679
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 17,
		"year": 1691
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 16,
		"year": 1704
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 34,
		"year": 1664
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 2,
		"year": 1680
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 50,
		"year": 1695
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 65,
		"year": 1698
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 8,
		"year": 1686
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 4,
		"year": 1687
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 16,
		"year": 1670
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 56,
		"year": 1709
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 27,
		"year": 1682
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 12,
		"year": 1701
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 4,
		"year": 1706
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 7,
		"year": 1688
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 46,
		"year": 1694
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 50,
		"year": 1671
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 10,
		"year": 1705
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 15,
		"year": 1684
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 57,
		"year": 1673
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 10,
		"year": 1689
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 36,
		"year": 1696
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 42,
		"year": 1675
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 51,
		"year": 1693
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 6,
		"year": 1666
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 7,
		"year": 1669
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 17,
		"year": 1676
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 41,
		"year": 1683
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 41,
		"year": 1699
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 18,
		"year": 1692
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 42,
		"year": 1672
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 5,
		"year": 1681
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 20,
		"year": 1690
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 25,
		"year": 1668
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 30,
		"year": 1697
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 22,
		"year": 1667
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 9,
		"year": 1685
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 52,
		"year": 1674
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 31,
		"year": 1702
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 20,
		"year": 1710
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 41,
		"year": 1708
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 30,
		"year": 1663
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 3,
		"year": 1665
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 19,
		"year": 1707
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 25,
		"year": 1700
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 1,
		"year": 1662
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 52,
		"year": "NULL"
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 10,
		"year": 1677
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 3,
		"year": 1678
	},
	{
		"Catalogue": "Lister, Martin",
		"number": 1,
		"year": 1660
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 61,
		"year": 1637
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 26,
		"year": 1626
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 21,
		"year": 1632
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 138,
		"year": 1635
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 37,
		"year": 1630
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 36,
		"year": 1628
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 17,
		"year": 1627
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 4,
		"year": 1623
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 91,
		"year": 1639
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 5,
		"year": "NULL"
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 103,
		"year": 1641
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 100,
		"year": 1634
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 90,
		"year": 1645
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 138,
		"year": 1648
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 147,
		"year": 1647
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 66,
		"year": 1633
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 98,
		"year": 1644
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 6,
		"year": 1617
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 43,
		"year": 1636
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 7,
		"year": 1624
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 23,
		"year": 1629
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 89,
		"year": 1643
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 5,
		"year": 1622
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 2,
		"year": 1619
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 98,
		"year": 1642
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 2,
		"year": 1621
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 76,
		"year": 1638
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 165,
		"year": 1646
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 163,
		"year": 1640
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 15,
		"year": 1625
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 3,
		"year": 1650
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 4,
		"year": 1649
	},
	{
		"Catalogue": "Mersenne, Marin",
		"number": 25,
		"year": 1631
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 3,
		"year": 1675
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 10,
		"year": 1659
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 2,
		"year": 1653
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 2,
		"year": 1664
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 2,
		"year": 1656
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 3,
		"year": 1661
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 2,
		"year": 1665
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 3,
		"year": 1681
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 2,
		"year": 1658
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 3,
		"year": 1668
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 7,
		"year": 1669
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 14,
		"year": 1682
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 2,
		"year": 1674
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 4,
		"year": 1679
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 7,
		"year": 1663
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 1,
		"year": 1662
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 4,
		"year": 1660
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 1,
		"year": 1678
	},
	{
		"Catalogue": "Nierop, Dirck Rembrantsz van",
		"number": 8,
		"year": 1677
	},
	{
		"Catalogue": "No catalogue specified",
		"number": 1,
		"year": 1666
	},
	{
		"Catalogue": "No catalogue specified",
		"number": 5,
		"year": "NULL"
	},
	{
		"Catalogue": "No catalogue specified",
		"number": 1,
		"year": 1616
	},
	{
		"Catalogue": "No catalogue specified",
		"number": 1,
		"year": 1660
	},
	{
		"Catalogue": "No catalogue specified",
		"number": 1,
		"year": 1680
	},
	{
		"Catalogue": "No catalogue specified",
		"number": 1,
		"year": 1615
	},
	{
		"Catalogue": "No catalogue specified",
		"number": 2,
		"year": 1688
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 2,
		"year": 1610
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 48,
		"year": 1630
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 50,
		"year": 1624
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 6,
		"year": 1613
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 118,
		"year": 1628
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 9,
		"year": "NULL"
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 90,
		"year": 1625
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 4,
		"year": 1606
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 36,
		"year": 1622
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 5,
		"year": 1603
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 223,
		"year": 1633
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 91,
		"year": 1632
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 224,
		"year": 1635
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 2,
		"year": 1604
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 1,
		"year": 1605
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 6,
		"year": 1614
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 26,
		"year": 1619
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 4,
		"year": 1639
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 110,
		"year": 1626
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 25,
		"year": 1620
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 5,
		"year": 1608
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 91,
		"year": 1629
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 28,
		"year": 1618
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 126,
		"year": 1636
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 8,
		"year": 1609
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 49,
		"year": 1631
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 6,
		"year": 1602
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 8,
		"year": 1623
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 12,
		"year": 1617
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 187,
		"year": 1634
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 69,
		"year": 1637
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 4,
		"year": 1615
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 3,
		"year": 1616
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 126,
		"year": 1627
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 3,
		"year": 1611
	},
	{
		"Catalogue": "Peiresc, Nicolas-Claude Fabri de",
		"number": 44,
		"year": 1621
	},
	{
		"Catalogue": "Permeier, Johann",
		"number": 9,
		"year": "NULL"
	},
	{
		"Catalogue": "Permeier, Johann",
		"number": 74,
		"year": 1638
	},
	{
		"Catalogue": "Permeier, Johann",
		"number": 4,
		"year": 1641
	},
	{
		"Catalogue": "Permeier, Johann",
		"number": 2,
		"year": 1637
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 18,
		"year": 1634
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 16,
		"year": 1628
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 14,
		"year": 1606
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 3,
		"year": 1617
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 1,
		"year": 1616
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 2,
		"year": 1623
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 3,
		"year": 1626
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 1,
		"year": 1610
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 19,
		"year": 1635
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 12,
		"year": 1629
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 14,
		"year": 1639
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 6,
		"year": 1621
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 5,
		"year": 1615
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 1,
		"year": 1600
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 1,
		"year": 1597
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 12,
		"year": "NULL"
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 14,
		"year": 1636
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 2,
		"year": 1609
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 2,
		"year": 1598
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 5,
		"year": 1624
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 1,
		"year": 1595
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 2,
		"year": 1618
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 32,
		"year": 1631
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 3,
		"year": 1614
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 2,
		"year": 1611
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 1,
		"year": 1596
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 5,
		"year": 1605
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 14,
		"year": 1630
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 4,
		"year": 1612
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 4,
		"year": 1622
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 23,
		"year": 1633
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 20,
		"year": 1637
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 5,
		"year": 1613
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 6,
		"year": 1627
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 7,
		"year": 1607
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 15,
		"year": 1632
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 1,
		"year": 1625
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 12,
		"year": 1608
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 10,
		"year": 1638
	},
	{
		"Catalogue": "Pontanus, Johannes Isacius",
		"number": 3,
		"year": 1620
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 2,
		"year": 1672
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 8,
		"year": 1668
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 5,
		"year": 1667
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 7,
		"year": 1669
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 2,
		"year": 1660
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 15,
		"year": 1670
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 1,
		"year": 1658
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 17,
		"year": 1665
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 13,
		"year": 1662
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 17,
		"year": 1663
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 31,
		"year": 1671
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 16,
		"year": 1661
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 14,
		"year": 1664
	},
	{
		"Catalogue": "Sachs von Löwenheim, Philipp Jakob",
		"number": 1,
		"year": 1648
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 110,
		"year": 1604
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 4,
		"year": 1571
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 21,
		"year": 1585
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 17,
		"year": 1583
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 4,
		"year": 1568
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 6,
		"year": 1580
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 15,
		"year": 1576
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 1,
		"year": 1565
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 6,
		"year": 1577
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 11,
		"year": 1590
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 21,
		"year": 1588
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 29,
		"year": 1597
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 103,
		"year": 1608
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 16,
		"year": 1575
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 5,
		"year": 1582
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 1,
		"year": 1561
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 147,
		"year": 1602
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 40,
		"year": 1594
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 14,
		"year": 1587
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 6,
		"year": 1578
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 1,
		"year": 1564
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 31,
		"year": 1591
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 76,
		"year": 1600
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 1,
		"year": 1566
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 132,
		"year": 1603
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 10,
		"year": "NULL"
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 27,
		"year": 1596
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 18,
		"year": 1579
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 55,
		"year": 1598
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 6,
		"year": 1589
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 10,
		"year": 1574
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 125,
		"year": 1607
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 4,
		"year": 1573
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 142,
		"year": 1606
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 2,
		"year": 1609
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 39,
		"year": 1593
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 47,
		"year": 1595
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 136,
		"year": 1605
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 9,
		"year": 1581
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 6,
		"year": 1572
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 48,
		"year": 1599
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 23,
		"year": 1584
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 26,
		"year": 1592
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 20,
		"year": 1586
	},
	{
		"Catalogue": "Scaliger, Joseph Justus",
		"number": 98,
		"year": 1601
	},
	{
		"Catalogue": "Schott, Caspar",
		"number": 3,
		"year": 1663
	},
	{
		"Catalogue": "Schott, Caspar",
		"number": 9,
		"year": 1661
	},
	{
		"Catalogue": "Schott, Caspar",
		"number": 4,
		"year": 1664
	},
	{
		"Catalogue": "Schott, Caspar",
		"number": 3,
		"year": 1665
	},
	{
		"Catalogue": "Schott, Caspar",
		"number": 8,
		"year": 1662
	},
	{
		"Catalogue": "Schott, Caspar",
		"number": 1,
		"year": 1656
	},
	{
		"Catalogue": "Selden, John",
		"number": 5,
		"year": 1641
	},
	{
		"Catalogue": "Selden, John",
		"number": 9,
		"year": 1650
	},
	{
		"Catalogue": "Selden, John",
		"number": 1,
		"year": 1615
	},
	{
		"Catalogue": "Selden, John",
		"number": 5,
		"year": 1625
	},
	{
		"Catalogue": "Selden, John",
		"number": 2,
		"year": 1631
	},
	{
		"Catalogue": "Selden, John",
		"number": 11,
		"year": 1636
	},
	{
		"Catalogue": "Selden, John",
		"number": 11,
		"year": 1618
	},
	{
		"Catalogue": "Selden, John",
		"number": 10,
		"year": 1643
	},
	{
		"Catalogue": "Selden, John",
		"number": 2,
		"year": 1623
	},
	{
		"Catalogue": "Selden, John",
		"number": 3,
		"year": 1621
	},
	{
		"Catalogue": "Selden, John",
		"number": 16,
		"year": 1654
	},
	{
		"Catalogue": "Selden, John",
		"number": 2,
		"year": 1616
	},
	{
		"Catalogue": "Selden, John",
		"number": 1,
		"year": 1619
	},
	{
		"Catalogue": "Selden, John",
		"number": 6,
		"year": 1638
	},
	{
		"Catalogue": "Selden, John",
		"number": 4,
		"year": 1629
	},
	{
		"Catalogue": "Selden, John",
		"number": 3,
		"year": 1634
	},
	{
		"Catalogue": "Selden, John",
		"number": 12,
		"year": 1642
	},
	{
		"Catalogue": "Selden, John",
		"number": 5,
		"year": 1644
	},
	{
		"Catalogue": "Selden, John",
		"number": 4,
		"year": 1632
	},
	{
		"Catalogue": "Selden, John",
		"number": 30,
		"year": 1652
	},
	{
		"Catalogue": "Selden, John",
		"number": 3,
		"year": 1633
	},
	{
		"Catalogue": "Selden, John",
		"number": 2,
		"year": 1624
	},
	{
		"Catalogue": "Selden, John",
		"number": 6,
		"year": 1640
	},
	{
		"Catalogue": "Selden, John",
		"number": 11,
		"year": 1627
	},
	{
		"Catalogue": "Selden, John",
		"number": 6,
		"year": 1622
	},
	{
		"Catalogue": "Selden, John",
		"number": 1,
		"year": 1628
	},
	{
		"Catalogue": "Selden, John",
		"number": 20,
		"year": 1648
	},
	{
		"Catalogue": "Selden, John",
		"number": 10,
		"year": 1647
	},
	{
		"Catalogue": "Selden, John",
		"number": 3,
		"year": 1649
	},
	{
		"Catalogue": "Selden, John",
		"number": 11,
		"year": 1637
	},
	{
		"Catalogue": "Selden, John",
		"number": 46,
		"year": 1653
	},
	{
		"Catalogue": "Selden, John",
		"number": 6,
		"year": 1646
	},
	{
		"Catalogue": "Selden, John",
		"number": 34,
		"year": 1651
	},
	{
		"Catalogue": "Selden, John",
		"number": 20,
		"year": "NULL"
	},
	{
		"Catalogue": "Selden, John",
		"number": 6,
		"year": 1635
	},
	{
		"Catalogue": "Selden, John",
		"number": 3,
		"year": 1626
	},
	{
		"Catalogue": "Selden, John",
		"number": 9,
		"year": 1639
	},
	{
		"Catalogue": "Selden, John",
		"number": 2,
		"year": 1630
	},
	{
		"Catalogue": "Selden, John",
		"number": 10,
		"year": 1645
	},
	{
		"Catalogue": "Selden, John",
		"number": 4,
		"year": 1620
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 66,
		"year": 1574
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 17,
		"year": 1581
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 17,
		"year": 1579
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 68,
		"year": 1586
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 17,
		"year": 1578
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 3,
		"year": 1582
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 6,
		"year": 1584
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 28,
		"year": 1585
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 19,
		"year": 1573
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 23,
		"year": 1577
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 58,
		"year": 1575
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 1,
		"year": 1566
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 1,
		"year": 1570
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 2,
		"year": 1569
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 7,
		"year": 1583
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 29,
		"year": 1576
	},
	{
		"Catalogue": "Sidney, Philip",
		"number": 18,
		"year": 1580
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 34,
		"year": 1678
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 20,
		"year": 1679
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 15,
		"year": 1674
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 12,
		"year": 1675
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 1,
		"year": 1664
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 2,
		"year": 1670
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 10,
		"year": 1672
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 28,
		"year": 1676
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 10,
		"year": 1671
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 2,
		"year": 1669
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 5,
		"year": 1667
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 10,
		"year": 1677
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 3,
		"year": 1668
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 2,
		"year": 1665
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 5,
		"year": 1666
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 2,
		"year": 1680
	},
	{
		"Catalogue": "Swammerdam, Jan",
		"number": 11,
		"year": 1673
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1635
	},
	{
		"Catalogue": "Tixall letters",
		"number": 4,
		"year": 1658
	},
	{
		"Catalogue": "Tixall letters",
		"number": 2,
		"year": 1646
	},
	{
		"Catalogue": "Tixall letters",
		"number": 47,
		"year": "NULL"
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1674
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1656
	},
	{
		"Catalogue": "Tixall letters",
		"number": 5,
		"year": 1621
	},
	{
		"Catalogue": "Tixall letters",
		"number": 3,
		"year": 1639
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1662
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1673
	},
	{
		"Catalogue": "Tixall letters",
		"number": 2,
		"year": 1702
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1684
	},
	{
		"Catalogue": "Tixall letters",
		"number": 2,
		"year": 1690
	},
	{
		"Catalogue": "Tixall letters",
		"number": 2,
		"year": 1668
	},
	{
		"Catalogue": "Tixall letters",
		"number": 2,
		"year": 1703
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1630
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1672
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1677
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1686
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1654
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1638
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1655
	},
	{
		"Catalogue": "Tixall letters",
		"number": 3,
		"year": 1636
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1620
	},
	{
		"Catalogue": "Tixall letters",
		"number": 3,
		"year": 1643
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1619
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1617
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1637
	},
	{
		"Catalogue": "Tixall letters",
		"number": 2,
		"year": 1623
	},
	{
		"Catalogue": "Tixall letters",
		"number": 1,
		"year": 1626
	},
	{
		"Catalogue": "Wallis, John",
		"number": 7,
		"year": 1651
	},
	{
		"Catalogue": "Wallis, John",
		"number": 3,
		"year": 1648
	},
	{
		"Catalogue": "Wallis, John",
		"number": 59,
		"year": 1672
	},
	{
		"Catalogue": "Wallis, John",
		"number": 65,
		"year": 1689
	},
	{
		"Catalogue": "Wallis, John",
		"number": 4,
		"year": 1654
	},
	{
		"Catalogue": "Wallis, John",
		"number": 40,
		"year": 1664
	},
	{
		"Catalogue": "Wallis, John",
		"number": 39,
		"year": 1700
	},
	{
		"Catalogue": "Wallis, John",
		"number": 63,
		"year": 1658
	},
	{
		"Catalogue": "Wallis, John",
		"number": 28,
		"year": 1677
	},
	{
		"Catalogue": "Wallis, John",
		"number": 36,
		"year": 1666
	},
	{
		"Catalogue": "Wallis, John",
		"number": 3,
		"year": 1643
	},
	{
		"Catalogue": "Wallis, John",
		"number": 59,
		"year": 1675
	},
	{
		"Catalogue": "Wallis, John",
		"number": 149,
		"year": 1668
	},
	{
		"Catalogue": "Wallis, John",
		"number": 30,
		"year": 1693
	},
	{
		"Catalogue": "Wallis, John",
		"number": 8,
		"year": 1679
	},
	{
		"Catalogue": "Wallis, John",
		"number": 72,
		"year": 1699
	},
	{
		"Catalogue": "Wallis, John",
		"number": 3,
		"year": 1649
	},
	{
		"Catalogue": "Wallis, John",
		"number": 61,
		"year": 1674
	},
	{
		"Catalogue": "Wallis, John",
		"number": 16,
		"year": 1665
	},
	{
		"Catalogue": "Wallis, John",
		"number": 63,
		"year": 1690
	},
	{
		"Catalogue": "Wallis, John",
		"number": 37,
		"year": 1698
	},
	{
		"Catalogue": "Wallis, John",
		"number": 28,
		"year": 1701
	},
	{
		"Catalogue": "Wallis, John",
		"number": 16,
		"year": 1659
	},
	{
		"Catalogue": "Wallis, John",
		"number": 84,
		"year": 1691
	},
	{
		"Catalogue": "Wallis, John",
		"number": 20,
		"year": 1681
	},
	{
		"Catalogue": "Wallis, John",
		"number": 22,
		"year": 1683
	},
	{
		"Catalogue": "Wallis, John",
		"number": 40,
		"year": 1685
	},
	{
		"Catalogue": "Wallis, John",
		"number": 38,
		"year": 1667
	},
	{
		"Catalogue": "Wallis, John",
		"number": 26,
		"year": 1687
	},
	{
		"Catalogue": "Wallis, John",
		"number": 23,
		"year": 1696
	},
	{
		"Catalogue": "Wallis, John",
		"number": 13,
		"year": 1694
	},
	{
		"Catalogue": "Wallis, John",
		"number": 5,
		"year": 1680
	},
	{
		"Catalogue": "Wallis, John",
		"number": 22,
		"year": 1655
	},
	{
		"Catalogue": "Wallis, John",
		"number": 61,
		"year": 1671
	},
	{
		"Catalogue": "Wallis, John",
		"number": 14,
		"year": 1682
	},
	{
		"Catalogue": "Wallis, John",
		"number": 24,
		"year": 1686
	},
	{
		"Catalogue": "Wallis, John",
		"number": 1,
		"year": "NULL"
	},
	{
		"Catalogue": "Wallis, John",
		"number": 76,
		"year": 1670
	},
	{
		"Catalogue": "Wallis, John",
		"number": 16,
		"year": 1661
	},
	{
		"Catalogue": "Wallis, John",
		"number": 33,
		"year": 1676
	},
	{
		"Catalogue": "Wallis, John",
		"number": 1,
		"year": 1645
	},
	{
		"Catalogue": "Wallis, John",
		"number": 52,
		"year": 1695
	},
	{
		"Catalogue": "Wallis, John",
		"number": 12,
		"year": 1703
	},
	{
		"Catalogue": "Wallis, John",
		"number": 32,
		"year": 1697
	},
	{
		"Catalogue": "Wallis, John",
		"number": 12,
		"year": 1650
	},
	{
		"Catalogue": "Wallis, John",
		"number": 3,
		"year": 1641
	},
	{
		"Catalogue": "Wallis, John",
		"number": 65,
		"year": 1673
	},
	{
		"Catalogue": "Wallis, John",
		"number": 58,
		"year": 1688
	},
	{
		"Catalogue": "Wallis, John",
		"number": 21,
		"year": 1656
	},
	{
		"Catalogue": "Wallis, John",
		"number": 20,
		"year": 1662
	},
	{
		"Catalogue": "Wallis, John",
		"number": 6,
		"year": 1653
	},
	{
		"Catalogue": "Wallis, John",
		"number": 9,
		"year": 1652
	},
	{
		"Catalogue": "Wallis, John",
		"number": 23,
		"year": 1702
	},
	{
		"Catalogue": "Wallis, John",
		"number": 9,
		"year": 1660
	},
	{
		"Catalogue": "Wallis, John",
		"number": 36,
		"year": 1678
	},
	{
		"Catalogue": "Wallis, John",
		"number": 89,
		"year": 1669
	},
	{
		"Catalogue": "Wallis, John",
		"number": 48,
		"year": 1692
	},
	{
		"Catalogue": "Wallis, John",
		"number": 10,
		"year": 1663
	},
	{
		"Catalogue": "Wallis, John",
		"number": 37,
		"year": 1657
	},
	{
		"Catalogue": "Wallis, John",
		"number": 52,
		"year": 1684
	}
];