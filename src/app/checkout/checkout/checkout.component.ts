import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CentralInfoService} from "../../shared/central-info.service"
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public customerCheckOutDetails;
  public totalAmount;

  constructor(private router: Router, public centralInfoService: CentralInfoService) { }

  ngOnInit() {
    this.customerCheckOutDetails = this.centralInfoService.getAllCustomerInfo()
    this.totalAmount = this.centralInfoService.total;
  }

}
