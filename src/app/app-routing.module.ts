import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './layout-components/signin/signin.component';
import { SignUpComponent } from './layout-components/signup/signup.component';
import { UserDetailsComponent } from './layout-components/user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'user',component:UserDetailsComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
