import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'user@example.com' && this.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}