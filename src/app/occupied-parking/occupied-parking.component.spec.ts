import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupiedParkingComponent } from './occupied-parking.component';

describe('OccupiedParkingComponent', () => {
  let component: OccupiedParkingComponent;
  let fixture: ComponentFixture<OccupiedParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupiedParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupiedParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
