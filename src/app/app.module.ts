import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";     
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HRComponent } from './hr/hr.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                             
    HttpModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
