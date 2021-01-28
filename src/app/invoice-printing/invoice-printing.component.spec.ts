import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePrintingComponent } from './invoice-printing.component';

describe('InvoicePrintingComponent', () => {
  let component: InvoicePrintingComponent;
  let fixture: ComponentFixture<InvoicePrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePrintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
