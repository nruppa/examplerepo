import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from '../test.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  displayedColumns: string[] = ['username', 'password', 'dateofbirth', 'Address', 'gender', 'Selectanfield'];
  login: any
  selected: any
  formdata: any;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private test: TestService) { }
  ngOnInit(): void {
    this.login = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*_=+-]{6,12}')]],
      dateofbirth: ['', Validators.required],
      Address: ['', Validators.required],
      gender: ['', Validators.required],
      Selectanfield: ['', Validators.required],
    })
  }
  submit(data: any) {
    // console.log(data)
    const dialogRef = this.dialog.open(UserComponent, {
      width: '250px',
    });
    this.test.formdata.next(data)

  }
}
// this.test.login = data.login
// console.log(this.test.login)