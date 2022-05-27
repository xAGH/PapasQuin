import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionButtonComponent } from './components/option-button/option-button.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { DailyRecordsComponent } from './pages/daily-records/daily-records.component';
import { MonthlyRecordsComponent } from './pages/monthly-records/monthly-records.component';
import { QuerysComponent } from './pages/querys/querys.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionButtonComponent,
    MainMenuComponent,
    DailyRecordsComponent,
    MonthlyRecordsComponent,
    QuerysComponent
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
