import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private as: AuthService) {}

  ngOnInit(): void {}

  login(form) {
    let data: User = form.value;
    this.as
      .login(data.email, data.password)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  }
}
