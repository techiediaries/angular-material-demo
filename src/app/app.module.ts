import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './material.module';

import { DataService } from './data.service';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';
import {ErrorComponent} from './error.component';
const appRoutes: Routes = [
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-create',      component: CustomerCreateComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MyMaterialModule,
    RouterModule.forRoot(
      appRoutes,
    )    
  ],
  entryComponents: [ErrorComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
