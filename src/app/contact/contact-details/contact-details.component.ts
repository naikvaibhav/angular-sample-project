import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CentralInfoService} from "../../shared/central-info.service"

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  // public selectedHrs:string;
  // public selectedDate:string;
  // public selectedMonth:string;
  // public fName:string;
  // public lName:string;
  // public email:string;
  // public mobNo:string;

  public contactDetails = {
    selectedHrs: '',
    selectedDate: '',
    selectedMonth: '',
    fName: '',
    lName: '',
    email: '',
    mobNo: '',
    paymentMethod: ''
  }
  constructor(private router: Router, public centralInfoService: CentralInfoService) { }

  ngOnInit() {
  }

  public changed = (event, tag) => {
    // this.selectCountry(this.selectedCountryCode);
    // for (let each of this.getPhoneCode()) {
    //   if (event.target.value === each.code) {
    //     this.internationalCode = each.number;
    //   }
    // }
    console.log('e', event.target.value, tag)
  };

  public selectPayMethod = (event) => {
    const btnId = event.target.id
    const getName = document.getElementById(event.target.id).textContent;
    this.contactDetails.paymentMethod = getName;
  }

  public onSubmit = () => {
    console.log(this.contactDetails)
    this.centralInfoService.customerInfoFn(this.contactDetails)
    this.router.navigate(["/checkout"]);
  }

}
