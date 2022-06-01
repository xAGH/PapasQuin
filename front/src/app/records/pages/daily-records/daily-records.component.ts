import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DailyRecord } from 'src/app/interfaces/daily-record';
import { DailyRecordsService } from 'src/app/services/daily-records.service';

@Component({
  selector: 'app-daily-records',
  templateUrl: './daily-records.component.html',
  styleUrls: ['./daily-records.component.css'],
})
export class DailyRecordsComponent implements OnInit {
  dailyRecordForm!: FormGroup;
  pattern = /^[0-9]+\.?[0-9]{1,2}$/;
  today = new Date().toISOString().match(/\d{4}-\d{2}-\d{2}/)

  constructor(
    private dailyRecordService: DailyRecordsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dailyRecordForm = this.fb.group({
	    date: [this.today, [Validators.required]],
      bulk_ente: ['', [Validators.required, Validators.pattern(this.pattern)]],
      bulk_prod: ['', [Validators.required, Validators.pattern(this.pattern)]],
      bulk_inve: ['', [Validators.required, Validators.pattern(this.pattern)]],
      pack_prod_1lb: ['', [Validators.required, Validators.pattern(this.pattern)]],
      pack_sout_1lb: ['', [Validators.required, Validators.pattern(this.pattern)]],
      pack_inve_1lb: ['', [Validators.required, Validators.pattern(this.pattern)]],
      pack_prod_5lb: ['', [Validators.required, Validators.pattern(this.pattern)]],
      pack_sout_5lb: ['', [Validators.required, Validators.pattern(this.pattern)]],
      pack_inve_5lb: ['', [Validators.required, Validators.pattern(this.pattern)]],
    });
  }

  registerDailyRecord(){
    if (this.dailyRecordForm.valid){
      let data: DailyRecord = this.dailyRecordForm.value;
      this.dailyRecordService.postDailyRecords(data);
    }
  }

}
