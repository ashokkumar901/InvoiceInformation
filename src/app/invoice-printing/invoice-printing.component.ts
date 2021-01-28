import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-printing',
  templateUrl: './invoice-printing.component.html',
  styleUrls: ['./invoice-printing.component.scss']
})
export class InvoicePrintingComponent implements OnInit {
  list = {
    'isChecked': 'true'
  }

  InvoicePrintingMasterList = [
    {
      'row_no': 1,
      's_customer_name': 'NCR Payments and Services Malaysia',
      's_billing_type': 'VOL',
      's_current_status': 'SENT TO FINANCE',
    },
    {
      'row_no': 2,
      's_customer_name': 'NCR Payments and Services Malaysia',
      's_billing_type': 'VOL',
      's_current_status': 'SENT TO FINANCE',
    },
    {
      'row_no': 3,
      's_customer_name': 'NCR Payments and Services Malaysia',
      's_billing_type': 'VOL',
      's_current_status': 'SENT TO FINANCE',
    },
    {
      'row_no': 4,
      's_customer_name': 'NCR Payments and Services Malaysia',
      's_billing_type': 'VOL',
      's_current_status': 'SENT TO FINANCE',
    },
    {
      'row_no': 5,
      's_customer_name': 'NCR Payments and Services Malaysia',
      's_billing_type': 'VOL',
      's_current_status': 'SENT TO FINANCE',
    }
  ]

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
    this.invoiceService.checkUserAccess();
  }

  ConfigureNewtemplate(a: string, b: string, c: string) {

  }
  invoicesearch() {

  }
  reset() {

  }
  approveInvoice() { }
  rejectInvoice() { }
  CheckBxSelectAll(list: string) { }
}
