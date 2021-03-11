import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiURL = environment.apiUrl+"/app";

  constructor(private httpClient:HttpClient) { }

  registerUser(formData:any){
     return this.httpClient.post(this.apiURL+"/signup",formData);
  }
}
