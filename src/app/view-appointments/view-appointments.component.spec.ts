import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentsComponent } from './view-appointments.component';

describe('ViewAppointmentsComponent', () => {
  let component: ViewAppointmentsComponent;
  let fixture: ComponentFixture<ViewAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
