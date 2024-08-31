import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './view/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(username: string) : Observable<User> {
    console.log("inside user service : " + username);
    return this.httpClient.get<User>("https://api.github.com/users/" + username);
  }

  errorHandler() {

  }
}
