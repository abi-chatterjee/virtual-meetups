import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private auth: AuthService) {

  }

  ngOnInit() {
  }

  performLogin() {
    if (this.email && this.password) {
      this.auth.login(this.email, this.password).then(data => {
        console.log(data);
        // Let us keep the login user info in the local storage
        localStorage.setItem('userinfo', JSON.stringify(data));

        this.router.navigate(['/landing/tabs/tab1']);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  navToSignup() {
    this.router.navigate(['/signup']);
  }

}
