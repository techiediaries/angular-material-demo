import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  name: string = "";
  email: string = "";
  job: string = "";
  address: string = "";
  selectedSource: string = "email";
  selectedGender: string = "male";
  isCompany : boolean = false;
  createdAt = new FormControl(new Date());

  constructor() { }
  public createCustomer(){

  }
  ngOnInit() {
  }

}
