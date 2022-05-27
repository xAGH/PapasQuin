import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DailyRecord } from 'src/app/interfaces/daily-record';
import { DailyRecordsService } from 'src/app/services/daily-records.service';

@Component({
  selector: 'app-daily-records',
  templateUrl: './daily-records.component.html',
  styleUrls: ['./daily-records.component.css']
})
export class DailyRecordsComponent implements OnInit {

  dailyRecords$!: Observable<DailyRecord[]>;

  constructor(private dailyRecordService: DailyRecordsService) {}

  ngOnInit(): void {
    this.dailyRecordService.getDailyRecords().subscribe(
      (resp: DailyRecord[]) => {
        this.dailyRecords$ = of(resp);
      }
    );
  }
}