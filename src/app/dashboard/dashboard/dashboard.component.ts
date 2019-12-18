import { Component } from '@angular/core';
import { EnergyService } from 'src/app/shared/energy.service';
import { GraphComponent } from 'src/app/dashboard/dashboard/graph.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dataSource: Object;
  chartConfig: Object;
  errorMessage: any;
  intensity: any = [

  ];
    constructor(private eService: EnergyService) {
      
     }

    viewGraph(){
      this.eService.getintensity().subscribe({
          next: intensity => {
              this.intensity = intensity.data.data.map(i => i.intensity.forecast);
              console.log(this.intensity);
          },
          error: err => this.errorMessage = err
      });

}
}