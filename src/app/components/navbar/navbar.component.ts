import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isUser: boolean = false;
  constructor(private as: AuthService) {}

  ngOnInit(): void {
    this.as.userState.subscribe((user) => {
      if (user) this.isUser = true;
      else this.isUser = false;
    });
  }
  logout() {
    this.as.logout();
  }
}
