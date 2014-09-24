var	renderDonutchart = function(targetElem, data){
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: '"DroidSansRegular"', // default font,
                    fontSize: '14px'
                }
            }
        });
		
        // Create the chart
        targetElem.highcharts({
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
                text:""
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
                data: data,
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
		
};
