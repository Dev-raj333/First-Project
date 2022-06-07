import { Component, OnInit } from '@angular/core';
import { List } from '../../listlogin.model';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  login: List =new List();
  submitted= false;
  constructor() { }

  ngOnInit(): void {
  }

}
