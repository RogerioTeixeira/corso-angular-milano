import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public user: any = {
    email: '',
    password: ''
  }
  isError: boolean = false;
  msgError: string;
  constructor(private userService: UserService) { }

  ngOnInit() {


  }

  submit(isValid: boolean) {
    if (isValid) {
      this.isError = false;
      this.userService.getUserById(this.user.email).subscribe(x => {
        if (x.password != this.user.password) {
          this.isError = true;
          this.msgError = "Password non valida"
        }
      }, (error) => {
        this.isError = true;
        this.msgError = "Utente non censito"
      })
    }
  }

}
