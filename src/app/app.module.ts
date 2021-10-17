import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AgGridModule } from 'ag-grid-angular';
import { SignInComponent } from './layout-components/signin/signin.component';
import { SignUpComponent } from './layout-components/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDetailsComponent } from './layout-components/user/user.component';
import { LayoutComponentsComponent } from './layout-components/layout-components.component';
import { HomeComponent } from './layout-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    WelcomeComponent,
    UserDetailsComponent,
    LayoutComponentsComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MaterialModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},NgxSpinnerService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
