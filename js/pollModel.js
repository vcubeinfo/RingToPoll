function pollModel() {
	var pollMeta = {};
	var pollData = []; 
	var selectedPollData = {};
	var gridDataModel = {
		"sPaginationType": "full_numbers",
		"columns": [],
		"data": []
	};
	
	this.initPollModel = function(pollCollection) {
		pollMeta = pollCollection.pollQMeta;
		pollData = pollCollection.pollQData;
		
		selectedPollData = (pollData[pollMeta.pollQIndex] != undefined) ? pollData[pollMeta.pollQIndex] : pollData[0]; 
	};
	
	
	this.getPollTitle = function() {
		return  selectedPollData.pollQ;
		
	};
	
	this.getPollChartData = function() {
		var chartData = [];
		
		//Avoiding divided by zero case
		var resCount = (selectedPollData.pollResCount) ? selectedPollData.pollResCount : 1;	
		var pollData = selectedPollData.pollQData;
		
		if(pollData) {
			for(var i=0, optionLen = pollData.length; i < optionLen; i++) {
				var chartSeriesItem = {
						"name": "",
						"y": 0,
						"color": "",
						"displayedValue": ""
					};
				var curSeriesData = pollData[i];	
				chartSeriesItem.name = curSeriesData.pollQKey;
				chartSeriesItem.displayedValue = curSeriesData.pollOptResCount;
				//@Need to handle colors array overflow when there are more series to be represented in the chart
				chartSeriesItem.color = pollMeta.pollLegendColors[i];					
				chartSeriesItem.y = Math.round((curSeriesData.pollOptResCount/resCount) * 100);
				chartData.push(chartSeriesItem);
			}
		}
		
		return chartData;
	};
	
	this.getPollGridData = function() {
		
		var gridRowCount = this.getGridRowsLength();
		
		//Erasing the previous data before pushing
		gridDataModel.data = [];
		
		this.prepareGridColumnModel();
		
		var pollData = selectedPollData.pollQData;
		
		
		for(var i=0; i < gridRowCount; i++) {
			
			var gridRowItem = {};
			
			for(var j=0, optionLen = pollData.length; j < optionLen; j++) {
				var pollResItem = pollData[j].pollResData[i];
				gridRowItem[pollData[j].pollQKey] = (pollResItem != undefined) ? pollResItem : '';
			}
			
			gridDataModel.data.push(gridRowItem);				
		
		}
		
		return gridDataModel;
	};
	
	this.prepareGridColumnModel = function() {
	
		var pollData = selectedPollData.pollQData;
		
		//Erasing the previous data before pushing
		gridDataModel.columns = [];
		
		if(pollData) {
			for(var i=0, optionLen = pollData.length; i < optionLen; i++) {
		
				var pollDataItem = pollData[i];
				var columnModelItem = { 
						"title": "", 
						"data": "", 
						"name": "", 
						"sortable": false 
					};
				columnModelItem.title = pollDataItem.pollQTitle;
				columnModelItem.data = pollDataItem.pollQKey;
				columnModelItem.name = pollDataItem.pollQKey;	
				
				gridDataModel.columns.push(columnModelItem);	
			}
						
		}				
		
	};
	
	//This function returns the row count with which the data table needs to be creted
	//Row count is intern dependent on the option which got maximum polls 
	this.getGridRowsLength = function() {
		var rowCount = 0;
		
		var pollData = selectedPollData.pollQData;
		
		if(pollData) {
			for(var i=0, optionLen = pollData.length; i < optionLen; i++) {
				var optResCount = pollData[i].pollOptResCount;
				if(optResCount > rowCount) {
					rowCount = 	optResCount;
				}
			}
		
		}
		return rowCount;
		
	};
	
}
