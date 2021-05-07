import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  APIEndPoint = environment.APIEndPoint

  constructor(
    private http: HttpClient
  ) { }

  login(data: User){
    return this.http.post(`${this.APIEndPoint}/login`, data);
  }

}
