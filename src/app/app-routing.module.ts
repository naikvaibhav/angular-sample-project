import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { ServicesComponent } from "./services/services/services.component"
import { CarsizeComponent } from "./carsize/carsize/carsize.component"
import { PriceComponent } from "./price/price/price.component"
import { ContactDetailsComponent } from "./contact/contact-details/contact-details.component"
import { CheckoutComponent } from "./checkout/checkout/checkout.component"
import { PaymentInfoComponent } from "./checkout/payment-info/payment-info.component"
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full",
  },
  { path: "services", component: ServicesComponent, pathMatch:"full" },
  { path: "carsize", component: CarsizeComponent, pathMatch:"full" },
  { path: "price", component: PriceComponent, pathMatch:"full" },
  { path: "contact", component: ContactDetailsComponent, pathMatch:"full" },
  { path: "checkout", component: CheckoutComponent, pathMatch:"full" },
  { path: "payment", component: PaymentInfoComponent, pathMatch:"full" },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "*", component: HomeComponent },
  { path: "**", component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
