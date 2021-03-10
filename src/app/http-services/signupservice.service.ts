import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private baseUrl= environment.apiUrl+'/app';


  constructor(private http:HttpClient) { }

  registerUser(formData:Object):Observable<Object>{
     return this.http.post(`${this.baseUrl}/signup`,formData);
  }
}