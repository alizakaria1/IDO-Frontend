import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Status } from 'src/app/Core/Entities/Status';
import { ToDo, ToDoDto } from 'src/app/Core/Entities/ToDo';
import { CommonService } from 'src/app/Services/common.service';
import { StatusService } from 'src/app/Services/status.service';
import { ToDoService } from 'src/app/Services/to-do.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  statuses: Status[];
  isUpdate: boolean[] = [false];
  items: ToDo[] = [];
  todoDetails: ToDo;
  title = '';
  importanceList: string[];
  timeFrameList: string[];
  confirmEdit: boolean = false;
  constructor(
    private status: StatusService,
    private todo: ToDoService,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.GetTodos();
    this.GetImportance();
    this.GetTimeFrame();
  }


  GetTodos() {
    this.status.GetAllStatuses().subscribe({
      next: (result) => (this.statuses = result),
    });
  }

  GetImportance() {
    this.common.GetImportance().subscribe({
      next: (result) => (this.importanceList = result),
    });
  }

  GetTimeFrame() {
    this.common.GetTimeFrame().subscribe({
      next: (result) => (this.timeFrameList = result),
    });
  }

  drop(event: CdkDragDrop<Status[]>): void {
    const status = event.container.data[0] as Status;
    const statusId = status.StatusId;

    const todo = event.item.data as ToDo;
    const category = todo.Category;
    const dueDate = todo.DueDate;
    const estimatedTime = todo.EstimatedTime;
    const importance = todo.Importance;
    const timeFrame = todo.TimeFrame;
    const todoId = todo.TodoId;
    const title = todo.Title;

    if (event.previousContainer != event.container) {
      const updateTodo = new ToDoDto();
      updateTodo.StatusId = statusId;

      const dateParts = dueDate.split('/');
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1;
      const year = parseInt(dateParts[2], 10);
      const formattedDate = new Date(year, month, day);
      updateTodo.Category = category;
      updateTodo.DueDate = formattedDate;
      updateTodo.EstimatedTime = estimatedTime;
      updateTodo.Importance = importance;
      updateTodo.TimeFrame = timeFrame;
      updateTodo.TodoId = todoId;
      updateTodo.Title = title;

      this.todo.UpdateTodo(updateTodo).subscribe({
        next: () => this.GetTodos(),
        error: (e) => console.error(e),
      });
    }
  }

}
