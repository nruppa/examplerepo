import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor(private sheet: MatBottomSheetRef) {}

  ngOnInit(): void {

 
}
openLink(event: MouseEvent): void {
  this.sheet.dismiss();
  event.preventDefault();
}
}
