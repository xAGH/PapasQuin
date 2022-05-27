import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRecordsComponent } from './pages/daily-records/daily-records.component';
import { MonthlyRecordsComponent } from './pages/monthly-records/monthly-records.component';
import { QuerysComponent } from './pages/querys/querys.component';

const routes: Routes = [
  { path: 'daily-records', component: DailyRecordsComponent },
  { path: 'monthly-records', component: MonthlyRecordsComponent },
  { path: 'querys', component: QuerysComponent },
  { path: '**', redirectTo:'querys' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
