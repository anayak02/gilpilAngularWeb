import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   apiURL = environment.apiUrl+"/app/user";
  constructor(private httpClient: HttpClient) {}

  public getAllUserDetails():Observable<Object>{
      return this.httpClient.get(`${this.apiURL}/getAllUserDetails`);
  }
}
