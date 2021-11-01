import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:UserDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
