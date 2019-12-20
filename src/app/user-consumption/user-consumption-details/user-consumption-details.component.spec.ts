import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsumptionDetailsComponent } from './user-consumption-details.component';

describe('UserConsumptionDetailsComponent', () => {
  let component: UserConsumptionDetailsComponent;
  let fixture: ComponentFixture<UserConsumptionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConsumptionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConsumptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
