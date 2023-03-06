import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveformsComponent } from '../reactiveforms/reactiveforms.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource: any;
  dialogRef: any;
  constructor() {}

  ngOnInit(): void {

  }
  click(){
    this.dialogRef.close();
  }
 
  }


