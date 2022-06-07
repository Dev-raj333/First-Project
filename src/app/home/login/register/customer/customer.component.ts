import { Component, OnInit } from '@angular/core';
import { List } from '../../listlogin.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  login: List =new List();
  submitted= false;
  constructor() { }

  ngOnInit(): void {
  }

}
