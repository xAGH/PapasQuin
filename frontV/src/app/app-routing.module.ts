import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRecordsComponent } from './pages/daily-records/daily-records.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { MonthlyRecordsComponent } from './pages/monthly-records/monthly-records.component';
import { QuerysComponent } from './pages/querys/querys.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'daily-record', component: DailyRecordsComponent },
  { path: 'monthly-record', component: MonthlyRecordsComponent },
  { path: 'querys', component: QuerysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
