import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { DatasetSelectorComponent } from './dataset-selector/dataset-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSummaryComponent,
    DatasetSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
