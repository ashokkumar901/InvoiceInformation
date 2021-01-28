import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceMasterComponent } from './invoice-master/invoice-master.component';
import { ConsolidationDefinitionComponent } from './consolidation-definition/consolidation-definition.component';
import { InvoiceInfoMappingComponent } from './invoice-info-mapping/invoice-info-mapping.component';
import { InvoiceConsolidationComponent } from './invoice-consolidation/invoice-consolidation.component';
import { InvoicePrintingComponent } from './invoice-printing/invoice-printing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceMasterComponent,
    ConsolidationDefinitionComponent,
    InvoiceInfoMappingComponent,
    InvoiceConsolidationComponent,
    InvoicePrintingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
