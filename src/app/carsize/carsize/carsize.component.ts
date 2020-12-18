import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import {CentralInfoService} from "../../shared/central-info.service"
// import { EventEmitter } from 'protractor';
const imagePath = "../../../assets/carsize"

@Component({
  selector: 'app-carsize',
  templateUrl: './carsize.component.html',
  styleUrls: ['./carsize.component.css']
})
export class CarsizeComponent implements OnInit {
  public selectedCars = []
  constructor(public centralInfoService: CentralInfoService) { }

  @Output() eventClicked = new EventEmitter<Array<string>>();
  ngOnInit() {
  }

  public setOfCarSize = [
    {
      "img": `${imagePath}/car.svg`,
      "serviceTitle": "SMALL",
      "selected": false
    },
    {
      "img": `${imagePath}/sedan-car-model.svg`,
      "serviceTitle": "SEDAN",
      "selected": false
    },
    {
      "img": `${imagePath}/car-of-hatchback-model.svg`,
      "serviceTitle": "HATCHBACK",
      "selected": false
    },
    {
      "img": `${imagePath}/microbus.svg`,
      "serviceTitle": "MINIVAN",
      "selected": false
    },
    {
      "img": `${imagePath}/coupe-car.svg`,
      "serviceTitle": "SUPER CAR",
      "selected": false
    },
    {
      "img": `${imagePath}/jeep.svg`,
      "serviceTitle": "CUV",
      "selected": false
    },
    {
      "img": `${imagePath}/old-pickup.svg`,
      "serviceTitle": "PICKUP TRUCK",
      "selected": false
    },
    {
      "img": `${imagePath}/microbus.svg`,
      "serviceTitle": "VAN",
      "selected": false
    },
    {
      "img": `${imagePath}/car-suv.svg`,
      "serviceTitle": "SUV",
      "selected": false
    },
  ]


  clickEvent(info,i){
    if(info.selected){
      info.selected = false;
      //removing an object from array of objects
      var removeIndex = this.selectedCars.map(function(item) { return item.serviceTitle}).indexOf(info.serviceTitle);
      console.log(removeIndex)
      this.selectedCars.splice(removeIndex, 1);
      console.log(this.selectedCars)
      this.setOfCarSize[i] = info;
      // this.setOfImages.splice(i, 1);
    }else{  
    // this.status = !this.status;  
    info.selected = true;
    this.setOfCarSize[i] = info;
    console.log(this.setOfCarSize)
    this.selectedCars.push(info)
    // this.eventClicked.emit(this.selectedCars)
    this.centralInfoService.storeAllCarsSelected(this.selectedCars)
    }   
}
}
