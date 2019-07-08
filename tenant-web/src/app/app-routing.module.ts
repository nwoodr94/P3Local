import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantWebSignupComponent } from 'tenant-web-signup';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full'},  
  { path: 'signup', component: TenantWebSignupComponent }
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
