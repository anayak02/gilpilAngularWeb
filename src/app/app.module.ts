import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './http-services/user-service.service';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { SigninComponent } from './componets/auth/signin/signin.component';

import { SignupComponent } from './componets/auth/signup/signup.component';
import { ResetPassowrdComponent } from './componets/auth/reset-passowrd/reset-passowrd.component';

import { HomeComponent } from './componets/home/home.component';
import { SharedComponent } from './componets/shared/shared.component';
import { HeaderNavComponent } from './componets/nav/header-nav/header-nav.component';
import { FooterNavComponent } from './componets/nav/footer-nav/footer-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    SigninComponent,
    SignupComponent,
    ResetPassowrdComponent,
    HomeComponent,
    SharedComponent,
    HeaderNavComponent,
    FooterNavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
