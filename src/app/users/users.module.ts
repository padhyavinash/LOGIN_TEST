import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";     
import {HttpModule} from "@angular/http";
import { UsersComponent } from './users.component';
import { HRComponent } from '../hr/hr.component';

@NgModule({
  declarations: [
    UsersComponent,
    HRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                             
    HttpModule    
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UserModule { }
