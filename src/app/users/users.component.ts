import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;
  first_name:string;
  last_name:string;
  userType: string;
  userName: string;
  pwd: string;


  constructor(private userService: UserService) { }

  loginUser()
  {
    const newUser ={
      userName: this.userName,
      pwd: this.pwd
    }
    console.log('Before_Username: '+newUser.userName);
    console.log('Before_Password: '+newUser.pwd);
    this.userService.loginUser(newUser)
      .subscribe(user => {
        //this.user = user;
        console.log(user);
        console.log('After_Username: '+user.userName);
        console.log('After_Password: '+user.pwd);   
        this.user = user 
    /*
    this.userService.getUsers()
      .subscribe(contacts =>
        this.contacts = contacts);
    */    
      });
  }

  /*
  deleteContact(id: any)
  {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data =>{
        if(data.n==1)
        {
          for(var i=0; i< contacts.length; i++ )
          {
            if(contacts[i]._id = id)
            {
              contacts.splice(i,1);
            }
          }
        }
        this.contactService.getContacts()
          .subscribe(contacts =>
            this.contacts = contacts);
      })
  }
  */

  ngOnInit() {/*
    this.userService.getUsers()
      .subscribe(users =>
      this.users = users);
      */
  }

}
