import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { SignupRequest } from '../register';
import { UserService } from '../_services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  register:SignupRequest=({
    username:'',
    password:'',
    email:'',
    roles:'',
    id: 0,
    token:''
  });
   username!:'';
    password!:'';
    email!:'';
    roles!:'';

  constructor(private router: Router,
    
    private userService: UserService) { }

  ngOnInit(): void {
  }

  RegisterUser(){
    console.log(this.username)
    console.log(this.password)
    console.log(this.email)
    console.log(this.roles)
    this.register.username=this.username;
    this.register.password=this.password;
    this.register.email=this.email;
    this.register.roles=this.roles;

    this.userService.register(this.register).pipe(first())
    
    .subscribe(
      (        data: any) =>  {
        console.log(data)
         
          this.router.navigateByUrl('');
      },
      );
}


  }

