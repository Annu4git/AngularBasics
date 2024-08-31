import { Component } from '@angular/core';
import { User } from './user';

import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  username: string = "";
  userLogin: String = "";
  url: String = "";
  name: String = "";
  followers: number = 0;

  dataFetched: boolean = false;

  constructor(private _userService: UserService) {

  }

  getUserInfo() {
    console.log("inside get user info : " + this.username);
    this._userService.getUser(this.username)
    .subscribe(response => {
      console.log("inside get user info, subscribe : " + response.login);
      this.dataFetched = true;
      console.log(response);
      this.userLogin = response.login;
      this.url = response.url;
      this.name = response.name;
      this.followers = response.followers;
    })
  }

}
