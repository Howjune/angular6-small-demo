import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyParkingDetailComponent } from './empty-parking-detail.component';

describe('EmptyParkingDetailComponent', () => {
  let component: EmptyParkingDetailComponent;
  let fixture: ComponentFixture<EmptyParkingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyParkingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyParkingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
