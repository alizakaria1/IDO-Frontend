import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userEmail = '';
  userImage = '';
  constructor(private common : CommonService){}
  ngOnInit(): void {
    this.GetTokenClaims();
  }

  searchQuery: string;

  ShowCreateForm() {
    this.common.showForm = true;
  }

  updateSearchQuery(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.common.updateSearchQuery(target.value);
    console.log(event)
  }

  GetTokenClaims(){
    const  token = localStorage.getItem('jwt_token');
    let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
    decodedJWT.Email = this.userEmail;
    //decodedJWT.Image = this.userImage;
    this.userImage = "https://localhost:7018/api/Files/Images/" + decodedJWT.Image
  }


}
