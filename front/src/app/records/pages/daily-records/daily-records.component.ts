import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { DailyRecord, TotalPackages } from 'src/app/interfaces/';
import { DailyRecordsService } from 'src/app/records/services/daily-records.service';
import { NotyfService } from '../../services/notyf.service';

@Component({
  selector: 'app-daily-records',
  templateUrl: './daily-records.component.html',
  styleUrls: ['./daily-records.component.css'],
})
export class DailyRecordsComponent implements OnInit {
  dailyRecordForm!: FormGroup;
  totalPackages$: Observable<TotalPackages> = of({
    sout: "0",
    prod: "0",
    inve: "0"
  });
  pattern = /^[0-9]+(?:\.?[0-9]{1,4})?$/;
  today = new Date().toISOString().match(/\d{4}-\d{2}-\d{2}/)?.toString()
  byRequired?: string;
  byPattern?: string;

  constructor(
    private dailyRecordService: DailyRecordsService,
    private message: NotyfService,
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
    this.dailyRecordForm.valueChanges
      .pipe(
        map((values: DailyRecord) => {
          const { 
            pack_sout_1lb, pack_sout_5lb,
            pack_prod_1lb, pack_prod_5lb,
            pack_inve_1lb, pack_inve_5lb
          } = values;

          return {
            sout: pack_sout_1lb + pack_sout_5lb,
            prod: pack_prod_1lb + pack_prod_5lb,
            inve: pack_inve_1lb + pack_inve_5lb  
          };
          
        })
      ).subscribe({
      next: (values: TotalPackages) => this.totalPackages$ = of(values) });
    
  }

  registerDailyRecord(){
    if (this.dailyRecordForm.valid){
      let data: DailyRecord = this.dailyRecordForm.value;
      this.dailyRecordService.postDailyRecords(data).subscribe((res)=>{
        this.message.success(res.response);
      });
    }
  }

  inputIsValid(key: string): string{
    return this.dailyRecordForm.controls[key].invalid ? 'invalid has-tooltip' : '';
  }

  getInputError(key: string): string{
    return this.dailyRecordForm.controls[key].getError('required') ? 'Campo requerido' : 'Maximo 4 decimales'
  }
}
