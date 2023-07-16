import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Observable, map } from 'rxjs';
import { CreateTodoResult, GetAllTodosResult, GetTodoResult, ToDo, ToDoDto, UpdateTodoResult } from '../Core/Entities/ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
url = ""
constructor(private http : HttpClient, private common : CommonService) { }

GetAllTodos() : Observable<ToDo[]>{
  this.url = this.common.baseUrl + 'ToDos/GetAllTodos';
  return this.http.get<GetAllTodosResult>(this.url).pipe(
    map((res) => {
      return res.MyResult;
    })
  );
}

GetTodo(id : number) : Observable<ToDo>{
  this.url = this.common.baseUrl +`ToDos/GetTodoById?id=${id}`;
  return this.http.get<GetTodoResult>(this.url).pipe(
    map((res) => {
      return res.MyResult;
    })
  );
}

CreateTodo(toDoDto : ToDoDto) : Observable<ToDoDto>{
  this.url = this.common.baseUrl + "ToDos/CreateTodo";
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  const options = { headers: headers };
  return this.http
    .post<CreateTodoResult>(this.url, JSON.stringify(toDoDto), options)
    .pipe(map((res) => {
      return res.MyResult;
    }));
}

UpdateTodo(toDoDto : ToDoDto) : Observable<ToDoDto>{
  this.url = this.common.baseUrl + "ToDos/UpdateTodo";
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  const options = { headers: headers };
  return this.http
    .put<UpdateTodoResult>(this.url, JSON.stringify(toDoDto), options)
    .pipe(map((res) => {
      return res.MyResult;
    }));
}

}
