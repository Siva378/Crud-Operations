import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { LoginRequest } from '../login';
import { SignupRequest } from '../register';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

    login(loginRequest:LoginRequest) {
        console.log("username :"+loginRequest.username);
        console.log("password: "+loginRequest.password);
        return this.http.post<any>(`${environment.apiUrl}/api/auth/signin`, JSON.stringify(loginRequest), this.httpOptions)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log("user name"+JSON.stringify(user));
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user)
                return user;
            }));
    }
  

   

   

    

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null!);
    }
}