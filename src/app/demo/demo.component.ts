import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  dialog: any;
  opened!:boolean

  constructor() {}

  ngOnInit(): void {
  }
  open() {
    this.dialog.open(LoginComponent, {
      data: {
          login:''
      },
    });
  }
}
