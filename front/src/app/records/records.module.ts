import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RecordsRoutingModule } from './records-routing.module';

import { DailyRecordsComponent } from './pages/daily-records/daily-records.component';
import { MonthlyRecordsComponent } from './pages/monthly-records/monthly-records.component';
import { QuerysComponent } from './pages/querys/querys.component';


@NgModule({
  declarations: [
    QuerysComponent,
    DailyRecordsComponent,
    MonthlyRecordsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RecordsRoutingModule,
  ]
})
export class RecordsModule { }
