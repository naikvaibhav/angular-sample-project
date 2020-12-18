import { Component, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';
import {CentralInfoService} from "../../shared/central-info.service"
const imagePath = "../../../assets/services"

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public selectedServices = []

  constructor(public centralInfoService: CentralInfoService) { }

  ngOnInit() {
    console.log(this.setOfImages)
  }

  status: boolean = false;

  
  public setOfImages = [
    {
      "img": `${imagePath}/car.svg`,
      "serviceTitle": "Car",
      "selected": false,
      "price": 200
    },
    {
      "img": `${imagePath}/engine.svg`,
      "serviceTitle": "Engine",
      "selected": false,
      "price": 200
    },
    {
      "img": `${imagePath}/repair.svg`,
      "serviceTitle": "Repair",
      "selected": false,
      "price": 200
    },
    {
      "img": `${imagePath}/paint.svg`,
      "serviceTitle": "Paint",
      "selected": false,
      "price": 200
    },
    {
      "img": `${imagePath}/steering-wheel.svg`,
      "serviceTitle": "Steering Wheel",
      "selected": false,
      "price": 200
    },
    {
      "img": `${imagePath}/checklist.svg`,
      "serviceTitle": "Checklist",
      "selected": false,
      "price": 200
    },
    {
      "img": `${imagePath}/fuel.svg`,
      "serviceTitle": "Fuel",
      "selected": false,
      "price": 200
    },
    {
      "img": `${imagePath}/tools.svg`,
      "serviceTitle": "Tools",
      "selected": false,
      "price": 200
    },
  ]
  clickEvent(info,i){
    if(info.selected){
      info.selected = false;
      var removeIndex = this.selectedServices.map(function(item) { return item.serviceTitle}).indexOf(info.serviceTitle);
      console.log(removeIndex)
      this.selectedServices.splice(removeIndex, 1);
      console.log(this.selectedServices)
      this.setOfImages[i] = info;
      // this.setOfImages.splice(i, 1);
    }else{  
    // this.status = !this.status;  
    info.selected = true;
    this.setOfImages[i] = info;
    console.log(this.setOfImages)
    console.log(this.selectedServices)
    this.selectedServices.push(info)
    // this.eventClicked.emit(this.selectedCars)
    this.centralInfoService.storeAllServicesSelected(this.selectedServices)
    }   
}
}
