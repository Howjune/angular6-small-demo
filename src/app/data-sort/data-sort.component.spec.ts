import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSortComponent } from './data-sort.component';

describe('DataSortComponent', () => {
  let component: DataSortComponent;
  let fixture: ComponentFixture<DataSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
