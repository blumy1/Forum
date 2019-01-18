import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _user: BehaviorSubject<User> = new BehaviorSubject(new User);

  private loggedInStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080/Forum_war_exploded/api/users/';

  getUserDetails(username, password): Observable<User> {
    return this.http.post<User>(this.userUrl + 'login', {username, password});
  }

  register(username, email, password) {
    return this.http.post<User>(this.userUrl, {username, email, password});
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus.next(value);
  }

  get isLoggedIn() {
    return this.loggedInStatus.asObservable();
  }

  get user() {
    return this._user.asObservable();
  }
}
