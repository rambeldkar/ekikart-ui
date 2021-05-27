import React, { useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
am4core.addLicense("ch-custom-attribution");

function Itemschart() {

  useLayoutEffect(() => {
    let chart = am4core.create("itemSalesChart", am4charts.XYChart);
    chart.padding(0, 5, 0, 0);   

    chart.numberFormatter.bigNumberPrefixes = [
        { "number": 1e+3, "suffix": "K" },
        { "number": 1e+6, "suffix": "M" },
        { "number": 1e+9, "suffix": "B" }
      ];
      
      let label = chart.plotContainer.createChild(am4core.Label);
      label.x = am4core.percent(97);
      label.y = am4core.percent(95);
      label.horizontalCenter = "right";
      label.verticalCenter = "middle";
      label.dx = -15;
      label.fontSize = 50;
      label.fill = am4core.color("#555555");
      
      let playButton = chart.plotContainer.createChild(am4core.PlayButton);
      playButton.x = am4core.percent(97);
      playButton.y = am4core.percent(95);
      playButton.dy = -2;
      playButton.verticalCenter = "middle";
      playButton.events.on("toggled", function(event) {
        if (event.target.isActive) {
          play();
        }
        else {
          stop();
        }
      })
      
      let stepDuration = 4000;
      
      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "items";
      categoryAxis.renderer.minGridDistance = 1;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.fill = am4core.color("#959595");

      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.rangeChangeEasing = am4core.ease.linear;
      valueAxis.rangeChangeDuration = stepDuration;
      valueAxis.extraMax = 0.1;
      valueAxis.renderer.labels.template.fill = am4core.color("#959595");
      
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryY = "items";
      series.dataFields.valueX = "amount";
      series.tooltipText = "{valueX.value}";
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusBottomRight = 0;
      series.columns.template.column.cornerRadiusTopRight = 0;
      series.interpolationDuration = stepDuration;
      series.interpolationEasing = am4core.ease.linear;
      
      
      let labelBullet = series.bullets.push(new am4charts.LabelBullet())
      labelBullet.label.horizontalCenter = "right";
      labelBullet.label.text = "{values.valueX.workingValue.formatNumber('$#.0as')}";
      labelBullet.label.textAlign = "end";
      labelBullet.label.dx = -10;
      labelBullet.label.fill = "#ffffff";

      chart.zoomOutButton.disabled = true;
      
      series.columns.template.adapter.add("fill", function(fill, target){
        return chart.colors.fill = am4core.color("#30649B");
      });
      
      let year = 1;
      let month =  ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
      label.text = month[0].toString();
      
      let interval;
      
      function play() {
        interval = setInterval(function(){
          nextYear();
        }, stepDuration)
        nextYear();
      }
      
      function stop() {
        if (interval) {
          clearInterval(interval);
        }
      }
      
      function nextYear() {
        year++
      
        if (year > 12) {
          year = 1;
        }
      
        let newData = allData[year];
        let itemsWithNonZero = 0;
        for (var i = 0; i < chart.data.length; i++) {
          chart.data[i].amount = newData[i].amount;
          if (chart.data[i].amount > 0) {
            itemsWithNonZero++;
          }
        }
      
        if (year === 1) {
          series.interpolationDuration = stepDuration / 4;
          valueAxis.rangeChangeDuration = stepDuration / 4;
        }
        else {
          series.interpolationDuration = stepDuration;
          valueAxis.rangeChangeDuration = stepDuration;
        }
      
        chart.invalidateRawData();
        //label.text = year.toString();
        //console.log(year);
       // console.log('year')
        label.text = month[year-1].toString();
      
        categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });
      }
      
      
      categoryAxis.sortBySeries = series;
      
      let allData = {
        "1": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 1000
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 120
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 500
          },
      
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 810
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 412
          }
        ],
        "2": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 900
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 45
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 123
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 47
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 789
          }
        ],
        "3": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 1000
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 73
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 745
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 540
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 234
          }
        ],
        "4": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 89
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 149
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 898
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 670
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 430
          }
        ],
        "5": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 650
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 292
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 242
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 150
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 750
          }
        ],
        "6": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 100
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 300
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 510
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 230
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 900
          }
        ],
        "7": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 276
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 418
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 288
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 1000
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 90
          }
        ],
        "8": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 517
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 547
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 330
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 166
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 550
          }
        ],
        "9": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 766
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 669
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 660
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 170
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 660
          }
        ],
        "10": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 979
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 796
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 450
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 170
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 107
          }
        ],
        "11": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 117
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 800
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 440
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 170
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 205
          }
        ],
        "12": [
          {
            "items": "Samsung Galaxy S20",
            "amount": 133
          },
          {
            "items": "OnePlus 8T (12GB)",
            "amount": 550
          },
          {
            "items": "Xiaomi Mi 11 Ultra",
            "amount": 780
          },
          {
            "items": "Huawei P40 Pro",
            "amount": 170
          },
          {
            "items": "Asus ROG Phone 5",
            "amount": 254
          }
        ]
      }
      
      chart.data = JSON.parse(JSON.stringify(allData[year]));
      categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });
      
      series.events.on("inited", function() {
        setTimeout(function() {
          playButton.isActive = true; // this starts interval
        }, 1000)
      }) 
 

      chart.current = chart;

      return () => {
        chart.dispose();
      };
    }, []);

    return (
      <div id="itemSalesChart" style={{ width: "100%", height: "250px" }}></div>
    );
 
}

export default Itemschart