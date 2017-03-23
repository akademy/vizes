/**
 * Created by sers0034 on 22/03/17.
 */
//select date_of_work_std_year,count(*) from cofk_union_work
//GROUP BY date_of_work_std_year
//ORDER BY date_of_work_std_year;

d3.json("data/worksByYear.json", function(data) {
	var column1 = ["Year"],
		column2 = ["Letter Count"];

	data.forEach( function( d ) {
		column1.push( d.date_of_work_std_year );
		column2.push( d.count );
	});

	var chart = c3.generate({
		bindto: '#chart',
		size: {
			height: 500
		},
		data : {
			x : "Year",
			columns: [
				column1, column2
			],
			type: 'bar'
		},
		bar: {
			//width: {
			//	ratio: 0.5 // this makes bar width 50% of length between ticks
			//}
			// or
			//width: 1 // this makes bar width 100px
		},
		axis : {
			x : {
			}
		},
		grid: {
			x: {
				lines: [
					{value: 1500, text: '1500'},
					{value: 1600, text: '1600'},
					{value: 1700, text: '1700'},
					{value: 1800, text: '1800'}
				]
			},
			y: {
				lines: [
					//{value: 500},
					//{value: 1000},
					//{value: 1500},
					//{value: 2000},
				]
			}
		},
		subchart: {
			show: true
		},
		zoom: {
			enabled: true
		}
	});
});