import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ItemsTypeComponent } from './items-type/items-type.component';
import { MobilesComponent } from './items-type/mobiles/mobiles.component';
import { LaptopsComponent } from './items-type/laptops/laptops.component';
import { ToysComponent } from './items-type/toys/toys.component';
import { HeadphonesComponent } from './items-type/headphones/headphones.component';
import { SportsComponent } from './items-type/sports/sports.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    ItemsTypeComponent,
    MobilesComponent,
    LaptopsComponent,
    ToysComponent,
    HeadphonesComponent,
    SportsComponent,
    PagenotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
