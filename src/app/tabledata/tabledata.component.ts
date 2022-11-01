import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {
  tabledata: any = []
  users: any;
  data1: any;
  dataSource: any;
  form: any;
  constructor(private test: TestService, private route:Router) { }
 
  ngOnInit(): void {

    this.dataSource = JSON.parse(localStorage.getItem('info') || '[]')
  }
  displayedColumns: string[] = ['username', 'password',  'address','dateofbirth' ,'selectanfield', 'gender','edit'];
  // dataSource = ELEMENT_DATA;
  arr: any = []
  edit(data:any)
  {
    this.edit=data.username
    this.form.patchValue({
      username:data.username,
      password:data.password,
      dateofbirth: data.dateofbirth,
      Address:data.Address,
      gender:data.gender,
      Selectanfield:data.Selectanfield,      
    })
    localStorage.setItem('info1', JSON.stringify(this.arr));  

    this.route.navigateByUrl('/patch')
  }

}
