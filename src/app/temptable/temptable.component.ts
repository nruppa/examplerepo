import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-temptable',
  templateUrl: './temptable.component.html',
  styleUrls: ['./temptable.component.css']
})
export class TemptableComponent implements OnInit {

  value:any;
  formvalue:any=[];
  userdata:any=[];
  displayedColumns: string[] = ['username', 'password', 'dateofbirth', 'Address', 'gender', 'Selectanfield','edit'];
  // dataSource: any=[];
  dataSource=[{
    Address: "tyt",
    Selectanfield: "option1",
    dateofbirth: "12/2/13",
    gender: "male",
    password: "1111111111",
    username: "tyhtu"
  }]
  login: any;
  tformvalue: any=[];
  constructor(private test:TestService,private router:Router) { }

  table!: MatTable<any>

  ngOnInit(): void {
    // console.log(this.test.tformdata);
    this.test.tformdata.subscribe((res:any) =>{
      // console.log('data',res)
      this.tformvalue=res;
      // console.log(this.formvalue);
      
    })
    this.test.tformdata.subscribe((res:any) =>{
      this.tformvalue=res;    
    })
   
    this.user();
  }

  edit(data:any)
  {
    console.log(data)
    this.edit = data.username
  
    this.test.tabledata.next(data)
  }
  user() {
    this.test.tformdata.subscribe(dat => {
      // console.log(dat);
      this.dataSource.push(dat)
      // console.log(this.userdata)
    })
  }
}
