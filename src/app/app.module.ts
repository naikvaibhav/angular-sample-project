import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

//importing formsModule
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './shared/header/header.component';
import { ServicesComponent } from './services/services/services.component';
import { CarsizeComponent } from './carsize/carsize/carsize.component';
import { PriceComponent } from './price/price/price.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { PaymentInfoComponent } from './checkout/payment-info/payment-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    CarsizeComponent,
    PriceComponent,
    ContactDetailsComponent,
    CheckoutComponent,
    PaymentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
