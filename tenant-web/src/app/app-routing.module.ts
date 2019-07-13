import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TenantWebSignupComponent } from '../../dist/tenant-web-signup';
import { TenantWebProfileComponent } from '../../dist/tenant-web-profile';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'SignUp', component: TenantWebSignupComponent },
  { path: 'Profile', component: TenantWebProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
