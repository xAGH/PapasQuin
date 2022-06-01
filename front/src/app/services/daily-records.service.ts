import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { DailyRecord } from '../interfaces/daily-record'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

interface DailyRecordResponse {
  response: DailyRecord[];
}

interface ResponseStructure {
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class DailyRecordsService {

  url: string = `${environment.backendBaseUrl}/${environment.dailyRecordEndpoint}`;

  constructor(private _client:HttpClientService) {}

  getDailyRecords(date?: string): Observable<DailyRecord[]>{
    let options = undefined;
    if (date){
      options = {
        params: {
          daily_record: date
        }
      }
    }
    return this._client.get<DailyRecordResponse>(this.url, options).pipe(
      map(response => response.response)
    );
  }

  postDailyRecords(data: DailyRecord): Observable<ResponseStructure>{
    console.log("Ji");
    
    let options = {}
    return this._client.post<ResponseStructure>(this.url, data, options);
  }

}
