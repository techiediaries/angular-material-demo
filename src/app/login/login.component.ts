import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ErrorComponent } from '../error.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string ="";
  public errorDialogRef: MatDialogRef<ErrorComponent>;

  constructor(private dialog: MatDialog,private router: Router) { }

  ngOnInit() {
  }
  login(){
    if(this.username === "demo" && this.password === "demo")
    {
      this.router.navigate(['customer-list']);
    }
    else
    {
      
      this.dialog.open(ErrorComponent,{  data: {
        message: "Your login information are incorrect!"
      }});
    }
  }
}
