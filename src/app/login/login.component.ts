import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();

    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;

    this.auth.getUserDetails(username, password).subscribe(user => {
      if (user != null) {
        this.router.navigate(['/']);
        this.auth.setLoggedIn(true);
        this.auth._user.next(user);
        console.log(user);
      }
    });
  }

}
