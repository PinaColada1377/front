import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/users/'


}
