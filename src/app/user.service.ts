import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import{User} from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  //retrieving UserService
  getUsers()
  {
    return this.http.get('http://localhost:3000/api/login')
      //.map(res => res.json());
      .pipe(map(res => res.json()));
  } 

  //add contact method
  loginUser(lgUser)
  {
    console.log('US_Username: '+lgUser.userName);  
    console.log('US_Password: '+lgUser.pwd);  
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log('Response: '+this.http.post('http://localhost:3000/api/login/check',lgUser,{headers:headers})
      //.map(res => res.json());
      .pipe(map(res => res.json())));
      
    return this.http.post('http://localhost:3000/api/login/check',lgUser,{headers:headers})
      //.map(res => res.json());
      .pipe(map(res => res.json()));
    
  } 

  /*
  //delete contact method
  deleteContact(id)
  {
    return this.http.delete('http://localhost:3000/api/contact/'+id)
      .pipe(map(res => res.json()));
  } 
  */
}
