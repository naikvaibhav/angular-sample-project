import { Component, OnInit } from '@angular/core';
const imagePath = "../../../assets/carsize"
import {CentralInfoService} from "../../shared/central-info.service"

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  public selectedServices;
  public selectedCarSize;

  public showData: Boolean = false;
  public totalPrice;

  constructor(public centralInfoService: CentralInfoService) { }

  ngOnInit() {
    this.selectedCarSize = this.centralInfoService.getAllCarsSelected()
    this.selectedServices  = this.centralInfoService.getAllServicesSelected()
    if(this.selectedCarSize && this.selectedCarSize){
      this.showData = true
    console.log(this.selectedServices);
    let sum = 0;
    const sumOfPrice = this.selectedServices.reduce((acc,cur)=>{
      return acc.price+cur.price
    })
    this.totalPrice = sumOfPrice;
    this.centralInfoService.storeTotalPrice(this.totalPrice)
    }
    
  }

}
