import { Result } from "./Result";
import { Status } from "./Status";

export class ToDo{
    TodoId : number;
    Title : string;
    DueDate : string;
    EstimatedTime : number;
    TimeFrame : string;
    Importance : string;
    Category : string;
    StatusId : number;
    Status : Status;
    isEdit : boolean
}

export class ToDoDto{
    TodoId : number;
    Title : string;
    DueDate : Date;
    EstimatedTime : number;
    TimeFrame : string;
    Importance : string;
    Category : string;
    StatusId : number;
    isEdit : boolean;
}

export class GetAllTodosResult extends Result{
    override MyResult: ToDo[];
}

export class GetTodoResult extends Result{
    override MyResult: ToDo;
}

export class CreateTodoResult extends Result{
    override MyResult: ToDoDto;
}

export class UpdateTodoResult extends Result{
    override MyResult: ToDoDto;
}