import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
 
const AUTH_API = 'http://localhost:8034/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {constructor(private http: HttpClient) { }

login(credentials): Observable<any> {
  return this.http.post(AUTH_API + 'signin', {
    username: credentials.username,
    password: credentials.password
  }, httpOptions);
}

register(user): Observable<any> {
  return this.http.post(AUTH_API + 'signup', {
    username: user.username,
    email: user.email,
    password: user.password
  }, httpOptions);
}
}
