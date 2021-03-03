import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  register(login: string, firstName: string, password: string, lastName: string, email: string): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users/add', {login, firstName, password, lastName, email})
  }
}
