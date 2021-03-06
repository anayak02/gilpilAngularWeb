import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   apiURL = " http://localhost:3000/app/user"
  constructor(private httpClient: HttpClient) { }

  public getAllUserDetails():Observable<Object>{
      return this.httpClient.get(`${this.apiURL}/getAllUserDetails`);
  }
}
