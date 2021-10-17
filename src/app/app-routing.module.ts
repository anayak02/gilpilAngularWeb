import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './component/signin/signin.component';
import { SignUpComponent } from './component/signup/signup.component';
import { UserDetailsComponent } from './component/user/user.component';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [
  {path:'user',component:UserDetailsComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
