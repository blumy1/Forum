import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  register(event) {
    event.preventDefault();

    const username = event.target.querySelector('#username').value;
    const email = event.target.querySelector('#email').value;    
    const password1 = event.target.querySelector('#password1').value;
    const password2 = event.target.querySelector('#password2').value;

    if (password1 !== password2) return;

    this.auth.register(username, email, password1).subscribe(response => {
      this.router.navigate(['/login']);
    });

  }

}
