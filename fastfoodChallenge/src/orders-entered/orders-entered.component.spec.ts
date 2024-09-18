import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersEnteredComponent } from './orders-entered.component';

describe('OrdersEnteredComponent', () => {
  let component: OrdersEnteredComponent;
  let fixture: ComponentFixture<OrdersEnteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersEnteredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersEnteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
