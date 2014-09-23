var chart = [];
function renderBarCharts(requiredData, renderDiv, count, title, changeType){
	var showLoading = false;
	
    chart[count] = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: renderDiv,
            backgroundColor: '',
            borderColor: null,
            borderRadius: 0,
            marginRight: 20,
            marginLeft: 20,
        },
		colors: ['#FFA313', '#FFF787', '#2DC577', '#0F82CC'],
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            startOnTick: true,
            tickLength: 0,
            tickmarkPlacement: 'on',
			lineWidth: 0
        },
        yAxis: {
            title: "",
            tickLength: 0,
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
			plotLines: [{
				value: 0,
				width: 1,
				color: 'white'
			}]
        },
        legend: {
            enabled: false
        },
        title: {
            text: title,
			style:{
				color: "#FFFFFF",
				fontSize: "15px"
			}
        },
		loading: {
	    	style: {
	    		backgroundColor: 'silver'
	    	},
	    	labelStyle: {
	    		color: '#FFFFFF'
	    	}
	    },
        tooltip: {
            shared: true,
			formatter: function() {
				return false;
			}
				
			
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                pointPlacement: 'between',
                groupPadding: 0,
                dataLabels: {
                    enabled: true,
                    color: 'white',
					useHTML: true,
                    formatter: function(){
						if (changeType == 'delta') { 
							if (this.point.options.noDelta) {
                                return this.point.options.formattedValue;
							} else {
                                return "<span>&#916;</span>" + this.point.options.formattedValue;
							}
						} else {
							return this.point.options.formattedValue;
						}
                    }
                },
				minPointLength: 2
            }
        },
        series: requiredData,
    
    },function(chart) {
		var limits = chart.yAxis[0].getExtremes();
		var ratio = 6; //Divided into 6 parts as total height of chart/ minimum of each part
		min = limits.min;
		max = limits.max;
		
		if (min < 0) {
			var ext = min * ratio * -1;
            
            if (ext > max) {
            	max = ext;
            }
		
		} else {
			min = max / ratio * -1;
		}
		
        chart.yAxis[0].setExtremes(min, max, true, false);
	});
	
}	

