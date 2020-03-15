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
  intensity: any = {}; 
  colArray:any = [];
  rowArray = [];
  dataArray = []; 
  errorMessage: any;
  isLoading = true;
  width = '1100';
  height= '600';
  type= 'heatmap';
  dataFormat= 'json';
  dataSource :any ={ 
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
    let colObj = {} ,rowobj = {} ,dataObj = {};
    this.eService.getintensity().subscribe({
        next: intensity => {
          this.isLoading = false;  
          rowobj = {'label':"", id: 'I'};
          this.rowArray.push(rowobj)
          intensity.data.data.map((i,index) => {
              colObj = {'label': i.from.substring(11,16),'id': i.from.substring(11,16) + index};
              dataObj = {
                  columnid: i.from.substring(11,16) + index,
                  rowId:"I",
                  displayvalue: i.intensity.forecast,
                  colorrangelabel: i.intensity.index
                }
              this.colArray.push(colObj);
              this.dataArray.push(dataObj)
              this.intensity = {
                rows: this.rowArray,
                columns: this.colArray, 
                dataset: this.dataArray
              };
            });
            console.log("intensity",this.intensity)
            this.dataSource = {

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
                  data: this.intensity.dataset
                }
              ],
              columns: {
                column: this.intensity.columns
              },
              rows: {
                row : this.intensity.rows
              },
              chart: {
                theme: "fusion",
                caption: "Average carbon intensity",
                subcaption: " carbon Instensity for a region",
                showvalues: "1",
                mapbycategory: "1",
                plottooltext:
                  "Average carbon intensity at $columnlabel is $displayvalue"
              }
            };
        },
        error: err => this.errorMessage = err
    });
  }
}


