import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidationDefinitionComponent } from './consolidation-definition/consolidation-definition.component';
import { InvoiceConsolidationComponent } from './invoice-consolidation/invoice-consolidation.component';
import { InvoiceInfoMappingComponent } from './invoice-info-mapping/invoice-info-mapping.component';
import { InvoicePrintingComponent } from './invoice-printing/invoice-printing.component';

const routes: Routes = [
  {path:'consolidationdefinition',component:ConsolidationDefinitionComponent},
  {path:'invoiceinfomapping',component:InvoiceInfoMappingComponent},
  {path:'invoiceconsolidation',component:InvoiceConsolidationComponent},
  {path:'invoiceprinting',component:InvoicePrintingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
