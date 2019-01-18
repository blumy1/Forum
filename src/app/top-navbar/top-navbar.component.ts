import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  user: User;
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
    this.auth.user.subscribe(user => this.user = user);
  }

  logout() {
    this.auth.setLoggedIn(false);
    this.router.navigate(['']);
  }

  getUserAvatar(): String {
    return this.user.imageUrl ? this.user.imageUrl : 'https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg';
  }

}
