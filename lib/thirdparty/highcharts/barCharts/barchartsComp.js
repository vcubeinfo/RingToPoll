function renderBarCharts(selector, requiredData){
    $(selector).highcharts({
        chart: {
            type: 'column',
            backgroundColor: '',
            borderColor: null,
            borderRadius: 0,
            marginRight: 20,
            marginLeft: 20,
        },
		colors: ['#3269AC'],
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: true
            },
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
			style:{
				color: "#FFFFFF",
				fontSize: "15px"
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
                dataLabels: {
                    enabled: true,
                    color: 'black',
					useHTML: true,
                    formatter: function(){
                    }
                }
            }
        },
        series: [requiredData],
    
    });
	
}	

