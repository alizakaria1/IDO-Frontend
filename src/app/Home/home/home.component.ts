import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Core/Entities/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  exceptionMessage = '';
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    if (this.myForm.valid) {
      const login = new Login();
      login.Email = this.myForm.value.email;
      login.Password = this.myForm.value.password;
      this.user.Login(login).subscribe({
        next: (result) => {
          if (result.IsSuccess == true) {
            localStorage.setItem('jwt_token', result.SuccessMessage);
            this.router.navigate(['todos']);
          } else {
            this.exceptionMessage = result.ExceptionMessage;
          }
        },
        error: (e) => console.error(e),
        complete: () => console.log('completed'),
      });
    }
  }


 

}
