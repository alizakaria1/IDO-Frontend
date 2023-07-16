import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  baseUrl = "https://localhost:7018/api/";
  url = "";
  showForm = false;

  constructor(private http : HttpClient) { }


  GetImportance() : Observable<string[]>{
    this.url = this.baseUrl + 'Enums/GetImportanceEnum';
    return this.http.get<string[]>(this.url);
  }

  GetTimeFrame() : Observable<string[]>{
    this.url = this.baseUrl + 'Enums/GetTimeFrameEnum';
    return this.http.get<string[]>(this.url);
  }

  private searchQuerySubject = new BehaviorSubject<string>('');
  public searchQuery$ = this.searchQuerySubject.asObservable();

  updateSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }
}
