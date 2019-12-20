import { Component, OnInit, Input } from '@angular/core';
import { EnergyService } from 'src/app/shared/energy.service';

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

  constructor(private eService: EnergyService) {
    this.chartConfig = {
      width: '700',
      height: '400',
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
            intensity.data.data.map(i => {
              intensityObj = {'label': i.from,'value': i.intensity.forecast};
              this.intensity.push(intensityObj);
              console.log("================",this.intensity);
            });
            
        },
        error: err => this.errorMessage = err
    });
}
}
