import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

 
  signin(form:NgForm){
  console.log("username = "+form.value.username);
  console.log("password = "+form.value.password);
   
  }
}
