import { Component , OnInit} from '@angular/core';
import { EnergyService } from 'src/app/shared/energy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  constructor(private eService: EnergyService) {    
  }
}