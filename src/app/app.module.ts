import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { DatasetSelectorComponent } from './dataset-selector/dataset-selector.component';
import { BrandbarComponent } from './brandbar/brandbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DataSummaryComponent,
    DatasetSelectorComponent,
    BrandbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: 'monitorMyBusiness', component: AppComponent },
      { path: 'chooseATemplate', component: AppComponent },
      { path: 'buildATable', component: AppComponent },
      { path: 'findMyStuff', component: AppComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
