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
import { UserDetailsComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    UserDetailsComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    
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
    FlexLayoutModule,
    AgGridModule.withComponents([]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},NgxSpinnerService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
