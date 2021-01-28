import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceConsolidationComponent } from './invoice-consolidation.component';

describe('InvoiceConsolidationComponent', () => {
  let component: InvoiceConsolidationComponent;
  let fixture: ComponentFixture<InvoiceConsolidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceConsolidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceConsolidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
