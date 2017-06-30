import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './component/app.component';
import { EmployeeComponent } from './component/EmployeeComponent';

import { EmployeeService } from './service/EmployeeService';

@NgModule({
  imports:      [ 
                  BrowserModule,
                  HttpModule,
                  RouterModule.forRoot(
                      [
                          {
                              path: "employees",
                              component: EmployeeComponent
                          }

                      ]
                  ),
                 FormsModule
                ],
  providers:    [
                  EmployeeService
                ],              
  declarations: [ 
                  AppComponent,
                  EmployeeComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
