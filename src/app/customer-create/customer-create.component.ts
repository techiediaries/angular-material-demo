import { Component, OnInit } from '@angular/core';

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
  

  sources = [
    {value: 'emarketing', viewValue: 'Email Marketing'},
    {value: 'socialmedia', viewValue: 'Social Media'},
    {value: 'affiliate', viewValue: 'Affiliate'}
  ];
  constructor() { }
  public createCustomer(){
    
  }
  ngOnInit() {
  }

}
