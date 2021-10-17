import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninService } from 'src/app/http-services/signin/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  
  constructor(private singinService:SigninService) { }
  username:string;
  password:string;

  ngOnInit() {
  }

 
  signin(form:NgForm){
  console.log("username = "+form.value.username);
  console.log("password = "+form.value.password);


  //  this.singinService.singinUser(form.value).subscribe(
  //      (data:any)=>{
        
  //        if(data.result==="success"){
  //          let user:any = data.user;
  //          console.log("user "+user.email);
  //          this.username=user.email;
  //        }
         
  //      }
  //      ,error=>{

  //       console.log(error['result']);
  //      }
       
  //      );
     
     
   
  }
}
