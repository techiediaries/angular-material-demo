import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Customer} from './customer';




@Injectable()
export class DataService {

  customers: Customer[] = [
      { id:1, name:'Customer 001',job:'Programmer'},
      { id:2, name:'Customer 002',job:'Programmer'},
      { id:3, name:'Customer 003',job:'Programmer'},
      { id:4, name:'Customer 004',job:'Programmer'},
      { id:5, name:'Customer 005',job:'Programmer'},
      { id:6, name:'Customer 006',job:'Programmer'},
      { id:7, name:'Customer 007',job:'Programmer'},
    ]; 
  constructor() {}
  public getLength(){
      return this.customers.length;
  } 
  public getCustomers(startIndex: number, endIndex: number): Observable<Customer[]> {
      var c: Customer[] = [];
      for( var i = startIndex; i <= endIndex ; i++)
      {
            c.push(this.customers[i]);
      }
      return new Observable(observer => {
        setTimeout(() => {
            observer.next(c);
            observer.complete();
        }, 2000);
        
        
    });

    
  }

}