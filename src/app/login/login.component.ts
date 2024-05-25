import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username!: string;
  password!: string;
  successMessage!: string;
  invalidLogin!: false;
  loginSuccess!: false;

  constructor(private http: HttpClient) { }

  login() {
    const credentials = { username: this.username, password: this.password  }
    this.http.post('http://localhost:8080/login', {username: this.username, password: this.password}).subscribe({
      next: (response: any) => console.log(response),
      error: (error: any) => console.log(error)
  });
  }

}
