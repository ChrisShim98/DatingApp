import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  loginMode = false;
  users: any;

  constructor(public accountService: AccountService, public router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("user") != null)
    {
      this.router.navigateByUrl('/members');
    }
   }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  loginToggle() {
    this.loginMode = !this.loginMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  cancelLoginMode(event: boolean) {
    this.loginMode = event;
  }

}
