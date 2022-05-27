import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { DailyRecordsComponent } from './pages/daily-records/daily-records.component';
import { MonthlyRecordsComponent } from './pages/monthly-records/monthly-records.component';
import { QuerysComponent } from './pages/querys/querys.component';


@NgModule({
  declarations: [
    DailyRecordsComponent,
    MonthlyRecordsComponent,
    QuerysComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ]
})
export class RecordsModule { }
