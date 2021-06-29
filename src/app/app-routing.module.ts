import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HeadphonesComponent } from './items-type/headphones/headphones.component';
import { ItemsTypeComponent } from './items-type/items-type.component';
import { LaptopsComponent } from './items-type/laptops/laptops.component';
import { MobilesComponent } from './items-type/mobiles/mobiles.component';
import { SportsComponent } from './items-type/sports/sports.component';
import { ToysComponent } from './items-type/toys/toys.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'cart', component:CartComponent},
  {path:'items-type', component:ItemsTypeComponent,children:[
    {path:'mobiles', component:MobilesComponent},
    {path:'laptops', component:LaptopsComponent},
    {path:'toys', component:ToysComponent},
    {path:'headphones', component:HeadphonesComponent},
    {path:'sports', component:SportsComponent}
  ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
