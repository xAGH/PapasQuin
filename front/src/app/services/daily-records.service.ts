import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { DailyRecord } from '../interfaces/daily-record'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

interface DailyRecordResponse {
  response: DailyRecord[];
}

@Injectable({
  providedIn: 'root'
})
export class DailyRecordsService {

  baseUrl: string = environment.backendBaseUrl;
  dailyRecordEndpoint: string = environment.dailyRecordEndpoint;

  constructor(private __client:HttpClientService) {}

  getDailyRecords(date?: string): Observable<DailyRecord[]>{
    let options = undefined;
    if (date){
      options = {
        params: {
          daily_record: date
        }
      }
    }
    return this.__client.get<DailyRecordResponse>(this.baseUrl+this.dailyRecordEndpoint, options).pipe(
      map(response => response.response)
    );
  }
}
