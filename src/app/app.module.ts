import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { MatSidenavModule } from '@angular/material/sidenav/typings/sidenav-module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LayoutComponentsComponent } from './layout-components/layout-components.component';
import { HomeComponent } from './layout-components/home/home.component';
import { UserDetailsComponent } from './layout-components/user/user.component';
import { SignInComponent } from './layout-components/signin/signin.component';
import { SignUpComponent } from './layout-components/signup/signup.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    WelcomeComponent,
    UserDetailsComponent,
    LayoutComponentsComponent,
    HomeComponent
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},NgxSpinnerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
