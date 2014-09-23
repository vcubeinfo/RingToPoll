/** This is the home page file **/

$(function(){
    var pollData = $.getJSON("localJson/pollJsonData.json", function(response){
        donutchart('.pieChartView', response.data);
		renderBarCharts('.barChartView', response.data);
    });
    
   	$('.fromDatepicker').datepicker({
   		//'buttonImage': ''
   	}).on('change', function(e) {
		this.value;
	});
	$('.toDatepicker').datepicker({
   		//'buttonImage': ''
   	}).on('change', function(en) {
		this.value;
	});
    
    $('#tableGrid').dataTable({
    				 "sPaginationType": "full_numbers",
    				 "aoColumns": [
        				{ "mDataProp": "public" },
				        { "mDataProp": "private" }
				      ],	
					  "aaData": [
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    },
					    {
					      "public": "123456",
					      "private": "987654"
					    }
					] 
				});
});
