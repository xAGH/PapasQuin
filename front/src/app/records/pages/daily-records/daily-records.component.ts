import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DailyRecord } from 'src/app/interfaces/daily-record';
import { DailyRecordsService } from 'src/app/services/daily-records.service';

interface TotalPackages{
  prod: number,
  sout: number,
  inve: number;
}

@Component({
  selector: 'app-daily-records',
  templateUrl: './daily-records.component.html',
  styleUrls: ['./daily-records.component.css'],
})
export class DailyRecordsComponent implements OnInit {
  dailyRecordForm!: FormGroup;
  pattern = /^[0-9]+(?:\.?[0-9]{1,4})?$/;
  today = new Date().toISOString().match(/\d{4}-\d{2}-\d{2}/)
  total_pack!: TotalPackages;

  constructor(
    private dailyRecordService: DailyRecordsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dailyRecordForm = this.fb.group({
	    date: [this.today, [Validators.required]],
      bulk_ente: [0, [Validators.required, Validators.pattern(this.pattern)]],
      bulk_prod: [0, [Validators.required, Validators.pattern(this.pattern)]],
      bulk_inve: [0, [Validators.required, Validators.pattern(this.pattern)]],
      pack_prod_1lb: [0, [Validators.required, Validators.pattern(this.pattern)]],
      pack_sout_1lb: [0, [Validators.required, Validators.pattern(this.pattern)]],
      pack_inve_1lb: [0, [Validators.required, Validators.pattern(this.pattern)]],
      pack_prod_5lb: [0, [Validators.required, Validators.pattern(this.pattern)]],
      pack_sout_5lb: [0, [Validators.required, Validators.pattern(this.pattern)]],
      pack_inve_5lb: [0, [Validators.required, Validators.pattern(this.pattern)]],
    });
  }

  get totalPackagesProd(){
    return this.dailyRecordForm.controls["pack_prod_1lb"].value + this.dailyRecordForm.controls["pack_prod_5lb"].value;
  }

  get totalPackagesSout(){
    return this.dailyRecordForm.controls["pack_sout_1lb"].value + this.dailyRecordForm.controls["pack_sout_5lb"].value;
  }

  get totalPackagesInve(){
    return this.dailyRecordForm.controls["pack_inve_1lb"].value + this.dailyRecordForm.controls["pack_inve_5lb"].value;
  }

  registerDailyRecord(){
    if (this.dailyRecordForm.valid){
      let data: DailyRecord = this.dailyRecordForm.value;
      this.dailyRecordService.postDailyRecords(data);
    }
    else{
      alert("Hagalo bien pedazo de mierda")
    }
  }

}
