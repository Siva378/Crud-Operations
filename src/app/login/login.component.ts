import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';
import { LoginRequest } from '../login';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

 
 login:LoginRequest=({
   username:'',
   password:''
 });
  password:string= '';
  username:string='';

  constructor(  private router: Router,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute 
    )
   {
    // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['']);
      }
  
     
    }

  ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
  
    
  }
  LoginUser()
  {
    //      this.httpClient.get<any>("/assets/credentials.json").subscribe(data=>{
    //     for (let i = 0; i < data.length; i++) {
    //      if(data[i].username==this.username && data[i].password==this.password)
    //      {
    //       console.log(this.username);
    //       console.log(this.password);
    //      console.log("User Authenticated");
    //      window.alert("User Authenticated")
    //      this.router.navigateByUrl("/crud/home");
    //      }

    //       } 
    // }
    //   );
    console.log(this.username);
      this.login.username=this.username;
      this.login.password=this.password;

      
      console.log("Hey"+this.login.username);

      this.authenticationService.login(this.login)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigateByUrl("/crud/home");
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
         

    
    
        }
    
      } 

