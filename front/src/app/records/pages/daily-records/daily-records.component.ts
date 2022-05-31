import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DailyRecord } from 'src/app/interfaces/daily-record';
import { DailyRecordsService } from 'src/app/services/daily-records.service';

@Component({
  selector: 'app-daily-records',
  templateUrl: './daily-records.component.html',
  styleUrls: ['./daily-records.component.css']
})
export class DailyRecordsComponent implements OnInit {

  dailyRecordForm!: FormGroup;

  constructor(private dailyRecordService: DailyRecordsService, private fb: FormBuilder) {  }

  ngOnInit(): void {
    this.dailyRecordForm = this.fb.group({
      bulk_ente: ['', [Validators.required]],
			bulk_inve: ['', [Validators.required]],
			bulk_prod: ['', [Validators.required]],
			date: ['', [Validators.required]],
			pack_inve_1lb: ['', [Validators.required]],
			pack_inve_5lb: ['', [Validators.required]],
			pack_prod_1lb: ['', [Validators.required]],
			pack_prod_5lb: ['', [Validators.required]],
			pack_sout_1lb: ['', [Validators.required]],
			pack_sout_5lb: ['', [Validators.required]],
			registered_in: ['', [Validators.required]],
			total_inve_prod: ['', [Validators.required]],
			total_pack_prod: ['', [Validators.required]],
			total_pack_sout: ['', [Validators.required]],
    });
  }

}