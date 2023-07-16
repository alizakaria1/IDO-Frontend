import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Observable, map } from 'rxjs';
import { Login, LoginResult, RegisterResult, User } from '../Core/Entities/user';
import { Result } from '../Core/Entities/Result';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "";

  constructor(private http : HttpClient, private common : CommonService) { }

  Login(login : Login) : Observable<Result>{
    this.url = this.common.baseUrl + "Users/Login";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http
      .post<LoginResult>(this.url, JSON.stringify(login), options)
      .pipe(map((res) => {
        return res;
      }));
  }

  Register(user : User) : Observable<User>{
    this.url = this.common.baseUrl + "Users/Register";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http
      .put<RegisterResult>(this.url, JSON.stringify(user), options)
      .pipe(map((res) => {
        return res.MyResult;
      }));
  }
}


