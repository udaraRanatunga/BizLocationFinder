import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {    
      title: 'Login Page'    
    }
  },      
  {    
    path: 'home',    
    component: HomeComponent, 
    canActivate: [AuthGuard],   
    data: {    
      title: 'Home Page'    
    }    
  },       
];    


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
