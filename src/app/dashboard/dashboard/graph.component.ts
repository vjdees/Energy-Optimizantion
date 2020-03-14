import { Component, OnInit, Input } from '@angular/core';
import { EnergyService } from 'src/app/shared/energy.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {    
  chartConfig: Object;
  intensity: any = [];  
  errorMessage: any;
  isLoading = true;
  width = '1100';
      height= '600';
      type= 'heatmap';
      dataFormat= 'json';
      dataSource = {
        colorrange: {
          gradient: "0",
          color: [
            {
              code: "#6da81e",
              minvalue: "0",
              maxvalue: "50",
              label: "low"
            },
            {
              code: "#f6bc33",
              minvalue: "50",
              maxvalue: "70",
              label: "moderate"
            },
            {
              code: "#e24b1a",
              minvalue: "70",
              maxvalue: "85",
              label: "high"
            }
          ]
        },
        dataset: [
          {
            data: [
              {
                columnid: "LA",
                rowId:"WI",
                displayvalue: "600",
                colorrangelabel: "high"
              },
              {
                columnid: "NY",
                rowId:"SP",
                displayvalue: "33.7",
                colorrangelabel: "low"
              },
              {
                columnid: "HO",
                rowId:"SU",
                displayvalue: "22.89",
                colorrangelabel: "low"
              },
              {
                columnid: "CH",
                rowId:"AU",
                displayvalue: "53.0",
                colorrangelabel: "moderate"
              }
            ]
          }
        ],
        columns: {
          column: [
            {
              id: "NY",
              label: "New York"
            },
            {
              id: "LA",
              label: "Los Angeles"
            },
            {
              id: "CH",
              label: "Chicago"
            },
            {
              id: "HO",
              label: "Houston"
            }
          ]
        },
        rows: {
          row: [
            {
              id: "WI",
              label: "Winter"
            },
            {
              id: "SU",
              label: "Summer"
            },
            {
              id: "SP",
              label: "Spring"
            },
            {
              id: "AU",
              label: "Autumn"
            }
          ]
        },
        chart: {
          theme: "fusion",
          caption: "Average temperature for Top 4 US Cities",
          subcaption: " Across all seasons (2016-17)",
          showvalues: "1",
          mapbycategory: "1",
          plottooltext:
            "$rowlabel's average temperature in $columnlabel is $displayvalue °F"
        }
      };

  constructor(private eService: EnergyService) {
      

  // this.dataSource = {
  //   "chart": {
  //     "caption": "Carbon Intensity Graph",
  //     "subCaption": "",
  //     "xAxisName": "Date & Time",
  //     "yAxisName": "Carbon Intensity",
  //     "numberSuffix": "",
  //     "theme": "fusion",
  //   },
  //   "data": this.intensity
  // };
  
   }

  ngOnInit() {
    this.viewGraph();
  }


  viewGraph(){
    let intensityObj = {};
    this.eService.getintensity().subscribe({
        next: intensity => {
          this.isLoading = false;  
          intensity.data.data.map(i => {
            console.log("i",i);
              intensityObj = {'label': i.from.substring(11,16),'value': i.intensity.forecast};
              this.intensity.push(intensityObj);
            });
            
        },
        error: err => this.errorMessage = err
    });
  }
}


