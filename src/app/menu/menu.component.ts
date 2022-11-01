import {  Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  title = 'any';  
  Form!: any;  
  items!: any;  
  constructor(private formBuilder: FormBuilder) {}   
  ngOnInit() {  
    this.Form = new FormGroup({  
      items: new FormArray([])  
    });  
  }   
  createItem(): FormGroup {  
    return this.formBuilder.group({  
      name: '',  
      password: ''  
    });  
  }   
  addItem(): void {  
    this.items = this.Form.get('items') as FormArray;  
    this.items.push(this.createItem());  
  }  
}   

// form: any;
// constructor(private fb: FormBuilder) {
//   this.form = this.fb.group({
//     // published: true,
//     Form: this.fb.array([]),
//   });
// }
// ngOnInit(): void {
// }
// addCreds():void {
//   const fm = this.form.controls.Form as FormArray;
//   fm.push(this.fb.group({
//     username: '',
//     password: '',
//   }));
// }
// } 