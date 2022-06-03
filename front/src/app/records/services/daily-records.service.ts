import { Injectable } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { DailyRecord } from '../../interfaces'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { RecordServicesModule } from './record-services.module';

interface GetResponseStructure {
  response: DailyRecord[];
}

interface PostResponseStructure {
  response: string;
}

@Injectable({
  providedIn: RecordServicesModule
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
    return this._client.get<GetResponseStructure>(this.url, options).pipe(
      map(response => response.response)
    );
  }

  postDailyRecords(data: DailyRecord): Observable<PostResponseStructure>{    
    return this._client.post<PostResponseStructure>(this.url, data).pipe(); 
  }
}
