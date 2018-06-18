import { Component, OnInit } from '@angular/core';
import { ListingService } from './../listing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, NgModel } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  test:any;
  loginform:any;
// calling
//dependency injection
//singleton:: object created only once :: only one instance
//service as a bridge to transfer data from one comp to another

// when object created in class
  constructor(private router: Router , private listingService: ListingService, private route: ActivatedRoute) {

this.loginform = new FormGroup({
      'Address': new FormControl(''),
      'Price': new FormControl(''),
      'Description': new FormControl(''),
      'Beds': new FormControl(''),
      'Propertytype': new FormControl(''),
      'Baths': new FormControl(''),
      'Sqft': new FormControl(''),
    });
   
   
   
   
                                                              
  }

  ngOnInit() {
     this.test = this.listingService.newediting;
     debugger;
  }
 
}
