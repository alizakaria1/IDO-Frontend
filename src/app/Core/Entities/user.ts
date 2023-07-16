import { Result } from "./Result";

export class User {
    UserId : number;
    UserName : string;
    Password : string;
    Email : string;
}

export class Login{
Email : string;
Password : string;
}

export class LoginResult extends Result{
    
}

export class RegisterResult extends Result{
    override MyResult: User;
}
