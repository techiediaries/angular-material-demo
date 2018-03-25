import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort,MatSnackBar} from '@angular/material';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [
    { id:1, name:'Customer 001',job:'Programmer'},
    { id:2, name:'Customer 002',job:'Programmer'},
    { id:3, name:'Customer 003',job:'Programmer'},
    { id:4, name:'Customer 004',job:'Programmer'},
    { id:5, name:'Customer 005',job:'Programmer'},
    { id:6, name:'Customer 006',job:'Programmer'},
    { id:7, name:'Customer 007',job:'Programmer'},
    { id:8, name:'Customer 008',job:'Programmer'},
    { id:9, name:'Customer 009',job:'Programmer'},
    { id:10, name:'Customer 010',job:'Programmer'},
    { id:11, name:'Customer 011',job:'Programmer'},
    { id:12, name:'Customer 012',job:'Programmer'},
    { id:13, name:'Customer 013',job:'Programmer'},
    { id:14, name:'Customer 014',job:'Programmer'},
    
  ]; 
  
  loading = true;

  dataSource = new MatTableDataSource<Customer>(this.customers);
  
  displayedColumns = ['id', 'name', 'job', 'operations'];
  pageSize = 4;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public snackBar: MatSnackBar) {}

  deleteCustomer(id){
    
    let snackBarRef = this.snackBar.open(`Deleting customer #${id}`);
  }

  editCustomer(id){
    let snackBarRef = this.snackBar.open(`Editing customer #${id}`);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    setTimeout(() => {
      
      this.loading = false;
      
    }, 2000);

    /*this.dataService.getCustomers(this.startIndex,this.endIndex).subscribe((d: Customer[])=>{

      this.dataSource.data = d;
      this.loading = false;

    });*/
    

    
  }
}
