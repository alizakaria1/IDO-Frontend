import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Observable, map } from 'rxjs';
import { Status, GetAllStatusesResult, CreateStatusResult, UpdateStatusResult } from '../Core/Entities/Status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
url = "";
  constructor(private http : HttpClient, private common : CommonService) { }

  GetAllStatuses() : Observable<Status[]>{
    this.url = this.common.baseUrl + 'Statuses/GetStatuses';
    return this.http.get<GetAllStatusesResult>(this.url).pipe(
      map((res) => {
        return res.MyResult;
      })
    );
  }
  
  CreateStatus(status : Status) : Observable<Status>{
    this.url = this.common.baseUrl + "Statuses/CreateStatus";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http
      .post<CreateStatusResult>(this.url, JSON.stringify(status), options)
      .pipe(map((res) => {
        return res.MyResult;
      }));
  }
  
  UpdateTodo(status : Status) : Observable<Status>{
    this.url = this.common.baseUrl + "Statuses/UpdateStatus";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http
      .put<UpdateStatusResult>(this.url, JSON.stringify(status), options)
      .pipe(map((res) => {
        return res.MyResult;
      }));
  }

}
