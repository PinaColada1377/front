import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/users/'

  constructor( private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token')
  }

  getUsersList() {
    return this.http.get(`${this.URL}`)
  }

  signUp(login: string, firstName: string, lastName: string, password: string, email: string, avatar: File): Observable<User> {
    return this.http.post<User>(`${this.URL}/add`, {login, firstName, lastName, password, email, avatar})
  }

  logIn(login: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.URL}/login`, {login, password})
  }
}
