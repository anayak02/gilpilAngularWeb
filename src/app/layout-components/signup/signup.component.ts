import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupserviceService } from 'src/app/http-services/signup-http-service/signupservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  errorMessage:any;
  constructor(private signupserviceService:SignupserviceService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
     this.signupserviceService.registerUser(form.value).subscribe(
       (data:any)=>{
       console.log("user register statur >",data);

       },
       error =>{
         let errorObj =error['error'];
         this.errorMessage=errorObj['responseMessage'];
       }
     );
  }

}
