import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  go(){
    this.router.navigate(['/login/signin']);
  }
  customer() {
    this.router.navigate(['/login/register/customer']);
  }
  owner() {
    this.router.navigate(['/login/register/owner']);
  }
}
