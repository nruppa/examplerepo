import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  login: any
  selected: any
  data: any;
  tabledata: any;
  users: any;
  data1: any;
  dataSource: any = []
  display: boolean = false;


  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.login = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*_=+-]{6,12}')]],
      dateofbirth: ['', Validators.required],
      Address: ['', Validators.required],
      gender: ['', Validators.required],
      Selectanfield: ['', Validators.required],
    })
    
    this.dataSource = JSON.parse(localStorage.getItem('data') || '')
  }
  displayedColumns: string[] = ['username', 'password', 'dateofbirth', 'Address', 'gender', 'Selectanfield', 'edit'];

  open(data: any): void {
    this.dialog.open(UserComponent, {
          
    
    });
    console.log(data)
    this.display = true;
    this.arr.push(data)
    this.login.reset()
    localStorage.setItem('data', JSON.stringify(this.arr));
    this.dataSource = JSON.parse(localStorage.getItem('data') || '')
  }
  arr: any = []
  table!: MatTable<any>
  addData(data: any) {
    console.log(data)
    this.arr.push(data)
    localStorage.setItem('data', JSON.stringify(this.arr));
    this.dataSource = JSON.parse(localStorage.getItem('data') || '')
    this.table.renderRows();
    this.login.reset()
  }
  edit(data: any) {
    this.edit = data.username
    this.login.patchValue({
      username: data.username,
      password: data.password,
      dateofbirth: data.dateofbirth,
      Address: data.Address,
      gender: data.gender,
      Selectanfield: data.Selectanfield
    })
  }
  savechanges() {
    this.dataSource.forEach((x: any) => {
      if (x.username == this.edit) {
        x.username = this.login.get('username').value,
          x.password = this.login.get('password').value,
          x.dateofbirth = this.login.get('dateofbirth').value,
          x.Address = this.login.get('Address').value,
          x.gender = this.login.get('gender').value,
          x.Selectanfield = this.login.get('Selectanfield').value
        this.login.reset()
      }
    })
    // localStorage.setItem("data", JSON.stringify(this.arr))
  }
  //  addData(data: any) {
  //   this.dataSource.push(data)
  //   localStorage.setItem('data', JSON.stringify(this.dataSource));     
  //   JSON.parse(localStorage.getItem('data') || '')
  //   console.log(this.dataSource);
  // }

}



















// password: ['', [Validators.required,]],
// lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
// email: ['', [Validators.required, Validators.email]],
// mobilenumber: ['', [Validators.required, Validators.pattern('[7-9]{1}[0-9]{9}')]],
//  confirmpassword: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*_=+-]{6,12}')]],
