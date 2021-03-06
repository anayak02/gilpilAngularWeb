import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   apiURL = "https://www.gilpil.com/app/user"
  constructor(private httpClient: HttpClient) { }

  public getAllUserDetails():Observable<Object>{
      return this.httpClient.get(`${this.apiURL}/getAllUserDetails`);
  }
}
