import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyParkingComponent } from './empty-parking.component';

describe('EmptyParkingComponent', () => {
  let component: EmptyParkingComponent;
  let fixture: ComponentFixture<EmptyParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
