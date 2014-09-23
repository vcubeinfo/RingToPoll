/** 
 * This is the home page file -
 * Basically, In this file we will take the data from local json and use that to chart views and table views
 * This is the controller of this page
 */
$(function(){
    var pollData = $.getJSON("localJson/pollJsonData.json", function(response){
		var responseData = response.data;
		
		//Dynamic title for chart views
		$(".chartTitle").text(responseData.name);
		
		//This is for pie chart
        donutchart('.pieChartView', responseData);
		
		//This is for column chart
		renderBarCharts('.barChartView', responseData);
		
		//This is for grid data
        $('#tableGrid').dataTable(responseData.gridData);
    });
    
	//From date picker
   	$('.fromDatepicker').datepicker({
   		//'buttonImage': ''
   	}).on('change', function(e) {
		this.value;
	});
	
	//To date picker
	$('.toDatepicker').datepicker({
   		//'buttonImage': ''
   	}).on('change', function(en) {
		this.value;
	});
    
});
