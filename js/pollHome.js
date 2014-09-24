/** 
 * This is the home page file -
 * Basically, In this file we will take the data from local json and use that to chart views and table views
 * This is the controller of this page
 */
window.onload = function() {
    var pollData = $.getJSON("localJson/automatedPoll.json", pollResponseCallback);
};


function pollResponseCallback(response) {
	
	var _this = this;

	var responseData = response.data;
	_this.pollModel = new pollModel();
	var pageHolderElem = $('.container');
	var pageDOMElems = {
		"titleElem" : pageHolderElem.find(".chartTitle"),
		"pollPieElem" : pageHolderElem.find(".pieChartView"),
		"pollBarElem" : pageHolderElem.find(".barChartView"),
		"pollTableElem" : pageHolderElem.find("#tableGrid")
	};

	_this.pollModel.initPollModel(responseData);

	//Dynamic title for chart views
	pageDOMElems.titleElem.text(_this.pollModel.getPollTitle());

	var pollChartData = _this.pollModel.getPollChartData();

	//This is for pie chart
	renderDonutchart(pageDOMElems.pollPieElem, pollChartData);

	try {
		//This is for column chart
		renderBarChart(pageDOMElems.pollBarElem, pollChartData);
		
	} catch(e) {
		alert(e);
	}


	//This is for grid data
	pageDOMElems.pollTableElem.dataTable(_this.pollModel.getPollGridData());

	//From date picker
	$('.fromDatepicker').datepicker({
		//'buttonImage': ''
	}).on('change', function(e) {
		this.value
	});

	//To date picker
	$('.toDatepicker').datepicker({
		//'buttonImage': ''
	}).on('change', function(en) {
		this.value
	});

}
