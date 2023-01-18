import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  menuOpened: boolean = false;

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/members');
        this.model = {};
      }
    })
  }

  loginAsGuest() {
    this.model = {
      "username": "Demo",
      "password": "Test123"
    };
    this.login();
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
