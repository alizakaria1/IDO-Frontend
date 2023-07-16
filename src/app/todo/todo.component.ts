import { Component, OnInit } from '@angular/core';
import { StatusService } from '../Services/status.service';
import { Status } from '../Core/Entities/Status';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ToDo } from '../Core/Entities/ToDo';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(public common : CommonService){}

  ngOnInit(): void {
    
  }



}
