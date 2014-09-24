function renderBarChart(targetElem, requiredData){
	var xAxisLabels = requiredData;
	var categoriesList = [];
	
	for (var i = 0, xAxisLabelsLen = xAxisLabels.length; i < xAxisLabelsLen; i++) {
		categoriesList.push(xAxisLabels[i].name);
	}
	
    targetElem.highcharts({
        chart: {
            type: 'column',
            backgroundColor: '',
            borderColor: null,
            borderRadius: 0,
            marginRight: 20,
            marginLeft: 20,
        },
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: true
            },
			categories: categoriesList,
            gridLineWidth: 0,
            startOnTick: false,
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
				color: '#CAC8CB'
			}]
        },
        legend: {
            enabled: false
        },
        title: {
            text: "",
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
                dataLabels: {
                    enabled: true,
                    color: 'black',
					useHTML: true,
                    formatter: function(){
						return this.point.displayedValue;
                    }
                }
            }
        },
        series: [{
        	data : requiredData
        }]
    
    });
	
}	

