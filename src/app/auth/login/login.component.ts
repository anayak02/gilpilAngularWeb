import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  apiUrl:string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });

    document.getElementById('captcha_id').setAttribute('src',this.apiUrl+'/gpservice/api/captcha.jpg?'+Math.random());
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  get captcha(){
    return this.loginForm.get("captcha");
  }
  refreshCaptcha(){
    document.getElementById('captcha_id').setAttribute('src',this.apiUrl+'/gpservice/api/captcha.jpg?'+Math.random());
  }
}
