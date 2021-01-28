import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceInfoMappingComponent } from './invoice-info-mapping.component';

describe('InvoiceInfoMappingComponent', () => {
  let component: InvoiceInfoMappingComponent;
  let fixture: ComponentFixture<InvoiceInfoMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceInfoMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceInfoMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
