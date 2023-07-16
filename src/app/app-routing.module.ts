import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { TodoComponent } from './todo/todo.component';
import { authGuard } from './Shared/auth.guard';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "todos", component : TodoComponent, canActivate : [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
