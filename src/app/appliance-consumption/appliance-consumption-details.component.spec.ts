import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceConsumptionDetailsComponent } from './appliance-consumption-details.component';

describe('ApplianceConsumptionDetailsComponent', () => {
  let component: ApplianceConsumptionDetailsComponent;
  let fixture: ComponentFixture<ApplianceConsumptionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplianceConsumptionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceConsumptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
