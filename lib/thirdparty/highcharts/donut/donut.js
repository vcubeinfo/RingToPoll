var	donutchart = function(id, data, colHeaders){
		var chart;
		var index=1;
		var colors = Highcharts.getOptions().colors;
		var columnHeaders = colHeaders;
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
		
        // Build the data array
        var chartData = [];
		
		//start adding the different colors for min and max percentage 
		//lets say first one is max and min to find out max and min among array list
        var minPercentage = data[0].percentage;
        var maxPercentage = data[0].percentage;
		var minIndex = 0;
		var maxIndex = dataLength - 1;
		
		//finding the max and min percentages from the values
		for (var i = 0; i < dataLength; i++) {
			var curOriginalValue = data[i].percentage;
			
			//find out min percentage and min percentage block
			if (minPercentage > curOriginalValue) {
				minPercentage = curOriginalValue;
				minIndex = i;
			} //else do nothing
			
			//find out max percentage and max percentage block
			if (maxPercentage < curOriginalValue) {
				maxPercentage = curOriginalValue;
				maxIndex = i;
			} //else do nothing
		}

		//If min and max percentages are in same block we show same colors
		if (minIndex != maxIndex) {
            //Red for Min percentage and Green for Max percentage
			finalColors[minIndex] = "#CE3539";
			finalColors[maxIndex] = "#79A446";
		} else {
			//just use default colors
		}//end adding the different colors for min and max percentage 
		
        for (var i = 0; i < dataLength; i++) {
			
			var curPercentageVal = Math.floor(data[i].percentage);
			var curOriginalVal = data[i].percentage;
            
            // If the percentage is less than 5 it cannot accomodate the label within that part
            // Hence making the min percentage as 3
            if (curOriginalVal < 5) {
                // If the label is a two digit number making the min percentage as 5
                curPercentageVal = (parseInt(data[i].shortcut) > 9) ? curOriginalVal + 4 : curOriginalVal + 3;
            }
			
            // add chart data
            chartData.push({
                name: data[i].shortcut,
                subname: data[i].name,
                y: curPercentageVal,
				actual: curOriginalVal,
				color: finalColors[i % colorSize],
				value:data[i].value,
				currencySymbol:data[i].currencySymbol,
				precision:data[i].precision,
				formatReq:data[i].isFormatRequired
            });
        }
    
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: '"DroidSansRegular"', // default font,
                    fontSize: '14px'
                }
            }
        });
		
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
            	backgroundColor: "#232324",
            	borderRadius: 0,
                renderTo: id,
                type: 'pie'
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
                    text: 'Total percent market share'
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
                	var curHoverItemCurrencySymbol = getValidValue(this.point.currencySymbol);
            		var curHoverItemPrecision = getValidValue(this.point.precision);
            		var curHoverItemValue = getValidValue(this.point.value);
            		var consolidatedItemValue = curHoverItemCurrencySymbol + curHoverItemValue + curHoverItemPrecision;
            		
                    return '<span class="toolTipItem">' + this.point.subname + ':</span><span class="toolTipItem">' + consolidatedItemValue + '</span><span class="toolTipItem">' + this.point.actual +' %</span>';
                }
            },
            series: [{
                name: '',
                data: chartData,
                innerSize: '45%',
                dataLabels: {
                    formatter: function() {
                        return this.point.name;
                    },
                    color: 'black',
                    distance: -20
                }
            }],
            legend:{
            	borderWidth: 0,
            	layout: "vertical",
            	labelFormatter: function() {
				},
				useHTML: true,
				padding: 0,
				symbolPadding: 0,
				symbolWidth: 0,
				itemWidth: 350,
				itemStyle: {
					cursor: 'pointer',
					color: '#F0F0F0'
				},
				itemHoverStyle: {
					color: '#5099F0'
				},
				itemMarginBottom: 3,
				width: 350
            }
        });
		
		// make empty the data array
        var chartData = [];
}
