var	donutchart = function(selector, data){
		var chart;
		var index=1;
		var colors = Highcharts.getOptions().colors;
		var divamiColors = [
                       '#FFF454',
                       '#FFD478',
                       '#F89D57',
                       '#F37761',
                       '#DB87B9',
                       '#B9B2D8',
                       '#9AD7DB',
                       '#73C167',
                       '#BBB0A3',
                       '#D9D3A4'
            ];
        var finalColors = divamiColors.concat(colors);
        var colorSize = finalColors.length;
		var dataLength = data.length;//length of data array
		
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: '"DroidSansRegular"', // default font,
                    fontSize: '14px'
                }
            }
        });
		
        // Create the chart
        $(selector).highcharts({
            chart: {
            	borderRadius: 0,
                type: 'pie',
				options3d: {
	                enabled: true,
	                alpha: 10,
	                beta: 0
	            }
            },
           	credits: {
				enabled: true,
				href: "",
				text: ""
			},
			labels: {
				items: {
					html: "",
					style:""
				},
					style: {}
			},
            title: {
                text:"Q1: Best Hospital in Banglore"
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                pie: {
                	allowPointSelect: true,
                    shadow: false,
                    showInLegend: true,
                    point: {
                        events: {
                            legendItemClick: function(){
                                return false;
                            }
                        }
                    },
					stickyTracking: false,
					states: {
                    	hover: {
                       		brightness: 0.4,
                        	enabled: true
                    	}
                	}
            	}
			},
            tooltip: {
				useHTML: true,
                formatter: function() {
					 return this.point.name + ": " + this.point.y + "%"
                }
            },
            series: [{
                name: '',
                data: data.data,
                dataLabels: {
                    formatter: function() {
                        return this.point.y + "%";
                    },
                    color: 'black',
                    distance: -20
                }
            }],
            legend:{
            	borderWidth: 0,
				align: 'top',
            	verticalAlign: 'top',
				x:150,
            	y: 50
            }
        });
		
}
