import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TenantWebSignupComponent } from '../../dist/tenant-web-signup';
import { TenantWebProfileComponent } from '../../dist/tenant-web-profile';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: TenantWebSignupComponent },
  { path: 'profile', component: TenantWebProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
