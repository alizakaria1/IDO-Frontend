import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  isBannerHidden = false;

  HideBanner(){
    this.isBannerHidden = true;
  }

  ShowBanner(){
    this.isBannerHidden = false;
  }

}
