import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit{
  // dataSource:any=[];
  // dataSource:any=[];
  // login: any=[];
 
  
  
  constructor() { }
  // formdata = new BehaviorSubject<any>([]);
  formdata = new ReplaySubject<any>();
  tabledata = new ReplaySubject<any>();
  tformdata=new ReplaySubject<any>();
  ttabledata = new ReplaySubject<any>();

  ngOnInit(): void {
  }
 
}
