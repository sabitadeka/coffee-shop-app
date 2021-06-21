import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CustomerBalancesheetComponent} from './customer-balancesheet.component';

describe('CustomerBalancesheetComponent', () => {
  let component: CustomerBalancesheetComponent;
  let fixture: ComponentFixture<CustomerBalancesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBalancesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBalancesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
