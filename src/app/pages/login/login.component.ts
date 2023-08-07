import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  async login() {
    let loginResult = await this.loginService.loginWithGoogle();
    if(loginResult == null) {
      console.log("failure");
      
    } else {
      console.log("success");
      this.router.navigate(['/home']);
    }
  }
}
