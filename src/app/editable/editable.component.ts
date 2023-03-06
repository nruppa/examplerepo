import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})

export class EditableComponent implements OnInit {
  dataSource1=[
    {"name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36},
    {"name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28},
    {"name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "age": 20},
    {"name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43},
  ]
  columnsSchema=[
    {
        key: "name",
        type: "text",
        label: "Full Name"
    },
    {
        key: "occupation",
        type: "text",
        label: "Occupation"
    },
    {
        key: "dateOfBirth",
        type: "date",
        label: "Date of Birth"
    },
    {
        key: "age",
        type: "number",
        label: "Age"
    },
    {
      key: "isEdit",
      type: "isEdit",
      label: ""
    }
]
  displayedColumns1: string[] = ['name', 'occupation',  'dateOfBirth', 'age','isEdit'];
  value: any;
  selected:any;
  formvalue: any = [];
  userdata: any = [];
  displayedColumns: string[] = ['username', 'password', 'dateofbirth', 'Address', 'Selectanfield'];
  // dataSource: any=[];
  column = [
    {key: "username", type: "text", label: "username"},
    { key: "password",type: "text",label: "password" },
    { key: "dateofbirth", type: "date", label: "dateofbirth" },
    { key: "Address",  type: "text",  label: "Address"},
    { key: "gender", type: "radio", label: "gender" }, 
    { key: "Selectanfield", type: "selected", label: "Selectanfield"},
    { key: "edit", type: "edit", label: ""}
  ]
  dataSource = [{
    Address: "tyt",
    Selectanfield: "option1",
    dateofbirth: "",
    gender: "male",
    password: "1111111111",
    username: "tyhtu"
  }]
  form: any;
  constructor( private fb:FormBuilder) { }
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
}
}
