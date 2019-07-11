import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantWebProfileModule } from '../../projects/tenant-web-profile/src/lib/tenant-web-profile.module';
import { TenantWebSignupModule } from '../../projects/tenant-web-signup/src/lib/tenant-web-signup.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickModule } from 'ngx-slick';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { TenantWebSignupComponent } from '../../dist/tenant-web-signup'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    CarouselComponent,
    ContentComponent,
    CardComponent,
    TenantWebSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    TenantWebProfileModule,
    TenantWebSignupModule,
    BrowserAnimationsModule,
    SlickModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//npm install --save @angular/material @angular/cdk @angular/animations
