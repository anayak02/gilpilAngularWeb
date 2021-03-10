import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';


const routes: Routes = [
  
    {
     path:'user',component:UserDetailsComponent
    },
    {
      path: '**',
      component: HomeComponent
    }
   
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
