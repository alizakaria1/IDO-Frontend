import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToDo, ToDoDto } from 'src/app/Core/Entities/ToDo';
import { CommonService } from 'src/app/Services/common.service';
import { StatusService } from 'src/app/Services/status.service';
import { ToDoService } from 'src/app/Services/to-do.service';

@Component({
  selector: 'app-manage-todo',
  templateUrl: './manage-todo.component.html',
  styleUrls: ['./manage-todo.component.css'],
})
export class ManageTodoComponent implements OnInit {

timeFrame : string[];
importance : string[];
title = '';
category = '';
date : Date;
number : number;
urgency : string;
frame : string;

  constructor(private common : CommonService, private todo : ToDoService) {
   
  }

  ngOnInit(): void {
   this.GetImportance();
   this.GetTimeFrame();
  }

 GetImportance(){
  this.common.GetImportance().subscribe({
    next : (result) => this.importance = result
  })
 }

 GetTimeFrame(){
  this.common.GetTimeFrame().subscribe({
    next : (result) => this.timeFrame = result
  })
 }

 onSubmit(){
  const todo = new ToDoDto();
  todo.Title = this.title;
  todo.TimeFrame = this.frame;
  todo.Category = this.category;
  todo.DueDate = this.date;
  todo.Importance = this.urgency;
  todo.EstimatedTime = this.number;

  this.todo.CreateTodo(todo).subscribe({
    next : (result) => {
      this.common.showForm = false,
      window.location.reload()
    },
    error : (e) => console.error(e)
  })

 }
}
