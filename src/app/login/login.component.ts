import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialloginService } from '../services/sociallogin.service';
import { Router } from '@angular/router';
import { Socialusers } from '../models/socialusers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  response;
  socialusers = new Socialusers();
  constructor(
    public OAuth: SocialAuthService,
    private SocialloginService: SocialloginService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      localStorage.setItem('socialusers', JSON.stringify(socialusers));
      this.router.navigate([`/home`]);
      // this.Savesresponse(socialusers);

    });
  }
  Savesresponse(socialusers: Socialusers) {

    this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {
      debugger;
      console.log(res);
      this.socialusers = res;
      this.response = res.userDetail;
      localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
      this.router.navigate([`/home`]);
    })
  }
}  