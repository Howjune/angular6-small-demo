import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkLotsComponent } from './pk-lots.component';

describe('PkLotsComponent', () => {
  let component: PkLotsComponent;
  let fixture: ComponentFixture<PkLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
