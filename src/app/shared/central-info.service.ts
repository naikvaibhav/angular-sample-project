import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentralInfoService {
  public carsSelected : String
  public servicesSelected : String
  public customerInfo: String
  public total:String;
  constructor() { }

  public storeAllCarsSelected = (getAllData) =>{
    this.carsSelected = getAllData;
  }

  public storeAllServicesSelected = (getAllData) =>{
    this.servicesSelected = getAllData;
  }

  public customerInfoFn = (customerInfo) =>{
    this.customerInfo = customerInfo;
  }

  public storeTotalPrice = (totalPrice) => {
    this.total = totalPrice
  }


  public getAllCarsSelected = () =>{
    console.log(this.carsSelected)
    return this.carsSelected;
  }

  
  public getAllServicesSelected = () =>{
    console.log(this.servicesSelected)
    return this.servicesSelected;
  }

  public getAllCustomerInfo = () =>{
    return this.customerInfo;
  }
}
