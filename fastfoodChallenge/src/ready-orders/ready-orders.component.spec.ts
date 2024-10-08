import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyOrdersComponent } from './ready-orders.component';

describe('ReadyOrdersComponent', () => {
  let component: ReadyOrdersComponent;
  let fixture: ComponentFixture<ReadyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadyOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
