import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupiedParkingDetailComponent } from './occupied-parking-detail.component';

describe('OccupiedParkingDetailComponent', () => {
  let component: OccupiedParkingDetailComponent;
  let fixture: ComponentFixture<OccupiedParkingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupiedParkingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupiedParkingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
