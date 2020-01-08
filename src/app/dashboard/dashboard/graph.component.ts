import { Component, OnInit, Input } from '@angular/core';
import { EnergyService } from 'src/app/shared/energy.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {    
  dataSource: Object;
  chartConfig: Object;
  intensity: any = [];  
  errorMessage: any;
  isLoading = true;

  constructor(private eService: EnergyService) {
    this.chartConfig = {
      width: '1100',
      height: '600',
      type: 'column2d',
      dataFormat: 'json',
  };

  this.dataSource = {
    "chart": {
      "caption": "Carbon Intensity Graph",
      "subCaption": "",
      "xAxisName": "Date & Time",
      "yAxisName": "Carbon Intensity",
      "numberSuffix": "",
      "theme": "fusion",
    },
    "data": this.intensity
  };

  
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
              intensityObj = {'label': i.from.substring(11,16),'value': i.intensity.forecast};
              this.intensity.push(intensityObj);
            });
            
        },
        error: err => this.errorMessage = err
    });
  }
}
