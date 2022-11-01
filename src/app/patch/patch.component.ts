import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TestService } from '../test.service';
@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class PatchComponent implements OnInit {
  login: any
  selected: any
  data: any;
  tabledata: any;
  tablevalue: any = [];
  users: any;
  data1: any;
  dataSource: any
  dataaa: any;
  formData: any = {};
  form: any;
  edit: any = [];
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
    this.dataa();
    this.patch();
  }
  submit(data: any) {
    console.log(data)
    // this.test.tabledata.next(data)
    this.test.formdata.next(data)
  }
  dataa() {
    this.test.tabledata.subscribe((dat => {
      this.tablevalue = dat;
      console.log(this.tablevalue);
    }))
  }
  patch() {
    this.login.patchValue({
      username: this.tablevalue.username,
      password: this.tablevalue.password,
      dateofbirth: this.tablevalue.dateofbirth,
      Address: this.tablevalue.Address,
      gender: this.tablevalue.gender,
      Selectanfield: this.tablevalue.Selectanfield,
    })
  }
save() {
  // console.log(this.login)
  this.tablevalue.forEach((x: any) => {
      x.username = this.login.get('username').value,
      x.password = this.login.get('password').value,
      x.dateofbirth = this.login.get('dateofbirth').value,
      x.Address = this.login.get('Address').value,
      x.gender = this.login.get('gender').value,
      x.Selectanfield = this.login.get('Selectanfield').value
  })
  this.test.tabledata.next(this.tablevalue)
}
}
