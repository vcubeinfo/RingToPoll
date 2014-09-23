/** This is the home page file **/

$(function(){
    var pollData = $.getJSON("localJson/pollJsonData.json", function(response){
        donutchart('.pieChartView', response.data);
		renderBarCharts('.barChartView', response.data);
    })
})
