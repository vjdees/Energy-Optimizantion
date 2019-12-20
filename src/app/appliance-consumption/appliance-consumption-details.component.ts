import { Component, OnInit } from '@angular/core';
import { ApplianceConsumptionService } from './appliance-consumption-details-service';

@Component({
  selector: 'app-appliance-consumption-details',
  templateUrl: './appliance-consumption-details.component.html',
  styleUrls: ['./appliance-consumption-details.component.css']
})
export class ApplianceConsumptionDetailsComponent implements OnInit {
  applianceConsumptions: any[]=[];
  errorMessage: any;

  constructor(private acdService: ApplianceConsumptionService) { }

  ngOnInit() {
    this.acdService.getapplianceconsumptiondetails().subscribe({
      next: applianceConsumptions => {
        this.applianceConsumptions = applianceConsumptions.body;
      },
      error: err => this.errorMessage = err
    })
  }

}
