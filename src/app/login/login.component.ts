import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LoginsComponent } from '../logins/logins.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;

  constructor(private fb:FormBuilder,private sheets: MatBottomSheet) { }

  ngOnInit() {

    this.login = this.fb.group({
      'username':'',
    
  })
}
open(): void {
  this.sheets.open(LoginsComponent);
}
}


