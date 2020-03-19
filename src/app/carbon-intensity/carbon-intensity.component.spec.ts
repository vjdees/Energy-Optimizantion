import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonIntensityComponent } from './carbon-intensity.component';

describe('CarbonIntensityComponent', () => {
  let component: CarbonIntensityComponent;
  let fixture: ComponentFixture<CarbonIntensityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonIntensityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonIntensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
