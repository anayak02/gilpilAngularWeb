import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/http-services/signup/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  maxDate;
  errorMessage:any;
  constructor(private signupService : SignupService,private router: Router) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log("form email ="+form.value.email);
    console.log("form passowrd="+form.value.password);
    console.log("form mobileNumber ="+form.value.mobileNumber);
    console.log("form dob ="+form.value.dob);
    console.log("form agree ="+form.value.agree);
     this.signupService.registerUser(form.value).subscribe(
       (data:any)=>{

        console.log("user register responseMessage >",data.result);

        if(data.result === "success"){
         this.router.navigate(['/user']);
        }
        

       },
       error =>{
         
         this.errorMessage=error['error'];
       }
     );
  }

}
