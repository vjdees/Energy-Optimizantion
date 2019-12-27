import { Component , OnInit} from '@angular/core';
import { EnergyService } from 'src/app/shared/energy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  dataSource: Object;
  chartConfig: Object;
  errorMessage: any;
  intensity: any = [];

    constructor(private eService: EnergyService) {
      
     }

    viewGraph(){
      let intensityObj = {};
      this.eService.getintensity().subscribe({
          next: intensity => {
              intensity.data.data.map(i => {
                intensityObj = {'label': i.from,'value': i.intensity.forecast};
                this.intensity.push(intensityObj);
              });
              
          },
          error: err => this.errorMessage = err
      });

}
}