import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../models/socialusers';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  socialusers: any = new Socialusers();
  constructor(public OAuth: SocialAuthService, private router: Router) { }

  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    console.log(this.socialusers.image);
  }
  logout() {
    this.OAuth.signOut().then(data => {
      // debugger;
      localStorage.removeItem('socialusers')
      this.router.navigate([`/login`]);
    });
  }
}