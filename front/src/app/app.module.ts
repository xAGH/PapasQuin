import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RecordsModule } from './records/records.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OptionButtonComponent } from './components/option-button/option-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
