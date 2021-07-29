import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private as: AuthService) {}

  ngOnInit(): void {}

  signup(form) {
    let d: User = form.value;
    this.as.signUp(d.email, d.password);
  }
}
