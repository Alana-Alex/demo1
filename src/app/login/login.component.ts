import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import {UserNameValidator } from "./username.validator"; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;

  constructor(private fb: FormBuilder ,private router: Router) { }

loginform=this.fb.group  ({
username:["",[Validators.required, Validators.minLength(4),UserNameValidator.shouldBeOnlyAlphabets]],
password:["", [Validators.required , Validators.pattern(/^[a-z0-9_-]{8,15}$/)]],
loginas:["",Validators.required]


})


new() {
   if (this.loginform.valid){
    this.router.navigate(['\listing']);     
     this.loginform.reset();
  }

}   
ngOnInit() {
  }


}
// validation(){
//   if (username=="alana" && password=="alana"){
//     this.message="successful"
//   }
//   else{
//     invalid user;
//   }
// }