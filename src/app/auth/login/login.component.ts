import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private formBuilder: FormBuilder,) { }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  onSubmit(form: NgForm) {
      
    

    this.loading = true;
 
  }
}
