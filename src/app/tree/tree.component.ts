import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  
  selected:any;
  displayedColumns: string[] = ['username', 'password', 'dateofbirth', 'Address', 'Selectanfield','edit'];
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
    dateofbirth: "02/12/2021",
    gender: "male",
    password: "1111111111",
    username: "tyhtu"
  }]
  table!: MatTable<any>
 dataSource1 = [
    {
      name: 'Fruit',
      children: [
        
      ]
    },
  ]
  ngOnInit(): void {
  }

}
