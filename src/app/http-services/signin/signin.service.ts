import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  apiURL = environment.apiUrl+'/app/user';
    
  constructor(private httpClient:HttpClient) { }

  singinUser(userData:any){
        return this.httpClient.post('/singin',userData);
  }
}
