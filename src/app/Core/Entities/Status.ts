import { Result } from "./Result";
import { ToDo } from "./ToDo";

export class Status{
    StatusId : number;
    StatusName : string;
    ToDos : ToDo[];
}


export class GetAllStatusesResult extends Result{
    override MyResult: Status[];
}

export class CreateStatusResult extends Result{
    override MyResult: Status;
}

export class UpdateStatusResult extends Result{
    override MyResult: Status;
}