import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/http-services/signup-http-service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  maxDate;
  errorMessage:any;
  constructor(private signupserviceService:SignupService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    alert(">");
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
