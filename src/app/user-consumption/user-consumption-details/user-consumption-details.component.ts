import { Component, OnInit } from '@angular/core';
import { UserConsumptionService } from '../user-consumption-details-service';

@Component({
  selector: 'app-user-consumption-details',
  templateUrl: './user-consumption-details.component.html',
  styleUrls: ['./user-consumption-details.component.css']
})
export class UserConsumptionDetailsComponent implements OnInit {
  userConsumptions: any[] = []
  errorMessage: any;
  constructor(private ucdService: UserConsumptionService) { }

  ngOnInit() {
    this.ucdService.getuserconsumption().subscribe({
      next: userConsumptions => {
        this.userConsumptions = userConsumptions.body;
      },
      error: err => this.errorMessage = err
    })

  }

}
