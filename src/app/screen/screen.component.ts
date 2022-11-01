import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  sample: any
  ngOnInit(): void {
    this.sample = new FormGroup({
      "LADP": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Name": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Extension": new FormControl('', [Validators.required]),
      "StoreNumber": new FormControl('', [Validators.required]),
      "PhoneType": new FormControl('', [Validators.required]),
      "DeviceExtension": new FormControl('', [Validators.required]),
      "DeviceSerialNumber": new FormControl('', [Validators.required]),
      "DamageType": new FormControl('', [Validators.required]),
      "Note": new FormControl('', [Validators.required]),
    })

    console.log(this.sample);
  }
  submit()
  {
    console.log(this.sample);
    // console.log(this.sample.controls['Name'].value)
  }
}












