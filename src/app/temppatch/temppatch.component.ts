import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { TestService } from '../test.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-temppatch',
  templateUrl: './temppatch.component.html',
  styleUrls: ['./temppatch.component.css']
})
export class TemppatchComponent implements OnInit {
  selected: any
  tabledata: any;
  tablevalue: any = [];
  users: any;
  data1: any;
  dataSource: any
  edit: any;
  dataaa: any;
  formData: any = {};
  form: any;
  ttablevalue: any;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private test: TestService) { }
  model: any = {};
  ngOnInit(): void {
    // this.dataSource = JSON.parse(localStorage.getItem('data') || '[]')


    this.dataa();
    this.patch();

  }
  table!: MatTable<any>
  submit(data: any) {
    // console.log(data)
    this.test.tformdata.next(data)
  }

  dataa() {
    this.test.ttabledata.subscribe(((dat) => {
      this.ttablevalue = dat;
      console.log(this.ttablevalue);
    }))
  }
  patch() {
    this.form.patchValue({
      username: this.ttablevalue.username,
      password: this.ttablevalue.password,
      Address: this.ttablevalue.Address,
      dateofbirth: this.ttablevalue.dateofbirth,
      Selectanfield: this.ttablevalue.Selectanfield,
      gender: this.ttablevalue.gender,
    })
  }
}
