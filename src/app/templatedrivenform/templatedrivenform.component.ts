import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { TestService } from '../test.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  dataSource: any;
  form: any;
  edit: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog,private test:TestService) { }
  model: any = {};
  formData: any = {};
  ngOnInit(): void {
    // this.dataSource = JSON.parse(localStorage.getItem('data') || '[]')
  }
  // arr: any = []
  table!: MatTable<any>
  submit(data: any) {
    // console.log(data)
    this.test.tformdata.next(data)
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UsersComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  }
