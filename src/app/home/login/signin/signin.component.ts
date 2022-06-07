import { Component, OnInit } from '@angular/core';
import { Login } from '../listlogin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login: Login =new Login();
  submitted= false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  go() {
    this.router.navigate(['/login/register']);
  }
}
