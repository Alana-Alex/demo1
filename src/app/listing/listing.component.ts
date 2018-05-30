import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { Router } from '@angular/router';

import { ListingService } from './../listing.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers:[ListingService]
})
export class ListingComponent implements OnInit {
  
  listing: any;
  tabledata:any;
  message: string;
  item: any;
  items: Array<any>;
  detailsform: FormGroup;
  // isShown:string="none";
  
  constructor(private router: Router, 
              private route: ActivatedRoute , private listingService: ListingService) {

    this.items = new Array<any>();
    this.detailsform = new FormGroup({
      'Address': new FormControl(''),
      'Price': new FormControl(''),
      'Description': new FormControl(''),
      'Beds': new FormControl(''),
      'Propertytype': new FormControl(''),
      'Baths': new FormControl(''),
      'Sqft': new FormControl(''),
    });
  }

  addingitem() {
   
    let listing: any = new Object();
    
    listing.Address = this.detailsform.value.Address;
    listing.Price = this.detailsform.value.Price;
    listing.Description = this.detailsform.value.Description;
    listing.Beds = this.detailsform.value.Beds;
    listing.Propertytype = this.detailsform.value.Propertytype;
    listing.Baths = this.detailsform.value.Baths;
    listing.Sqft = this.detailsform.value.Sqft;
    listing.isShown = "none";
    this.items.push(listing);
    this.detailsform.reset();
  
  }

   ngOnInit(){
    
  }
//pass the parameter
  deleting(item) {
    // debugger;
    var i;
    var Sure = confirm("Are you sure");
    if (Sure == true) {
      //its one object  
      //indexOf ::index of passed item
      i = this.items.indexOf(item);
      //splice have 2 param:: which index and how many to delete
      //2nd parameter is known.
      //when we do splice ,the whole object is deleted
      this.items.splice(i, 1)
    }
  }

  hide(obj, idx)
  {
    if(obj.isShown=="none"){
      obj.isShown="inline"
    }
    else{
      obj.Address = (document.getElementById("addr"+idx) as HTMLInputElement).value;
      obj.Price = (document.getElementById("pri"+idx) as HTMLInputElement).value;
      obj.Description = (document.getElementById("desc"+idx) as HTMLInputElement).value;
      obj.Beds = (document.getElementById("bed"+idx) as HTMLInputElement).value;
      obj.Propertytype = (document.getElementById("prop"+idx) as HTMLInputElement).value;
      obj.Baths = (document.getElementById("bat"+idx) as HTMLInputElement).value;
      obj.Sqft = (document.getElementById("sqft"+idx) as HTMLInputElement).value;
      obj.isShown="none";
    }
  }

  opposite(isShown){
    if(isShown=="none")
      return "inline"
    else
      return "none"
  }


 
    

   
  editing(item) {
  
    var edited = confirm("are you sure you wanna go  to the edit page");
    if (edited == true) {
      //item stored in variable of service 
     this.listingService.newediting=item;
      this.router.navigate(['\edit'])

      debugger;
    }
  }


 

}










