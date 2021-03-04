import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private baseUrl='/gilpilservice/api';

  constructor(private http:HttpClient) { }

  registerUser(formData:Object):Observable<Object>{
     return this.http.post(`${this.baseUrl}/signup`,formData);
  }
}
