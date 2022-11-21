import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  value: any;
  selected: any=[];
  formvalue: any = [];
  userdata: any = [];
  displayedColumns: string[] = ['username', 'password', 'dateofbirth', 'Address', 'Selectanfield'];
  // dataSource: any=[];
  column = [
    { label: "username", type: "text", key: "username" },
    { label: "password", type: "text", key: "password" },
    { label: "dateofbirth", type: "date", key: "dateofbirth" },
    { label: "Address", type: "text", key: "Address" },
    { label: "gender", type: "radio", key: "gender" },
    { label: "Selectanfield", type: "select", key: "Selectanfield" },
    { label: "edit", type: "edit", key: "" }
  ]
  dataSource = [{
    Address: "tyt",
    Selectanfield: "option1",
    dateofbirth: " ",
    gender: "male",
    password: "1111111111",
    username: "tyhtu"
  }]
  form: any;
  constructor(private test: TestService, private router: Router, private fb: FormBuilder) { }
  table!: MatTable<any>

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [''],
      password: [''],
      dateofbirth: [''],
      Address: [''],
      gender: [''],
      Selectanfield: [''],
    })
    // console.log(this.test.formdata);
    this.test.formdata.subscribe((res: any) => {
      // console.log('data',res)
      this.formvalue = res;
    })
    this.test.tabledata.subscribe((res: any) => {
      this.formvalue = res;
    })

    this.user();
  }

  edit(data: any) {
    console.log(data)
    // this.edit = data.username
    this.test.tabledata.next(data)
  }
  user() {
    this.test.formdata.subscribe(dat => {
      // console.log(dat);
      this.dataSource.push(dat)
    })
  }
  fixedSizeData = Array(10000).fill(30);
}
