import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;

  constructor(private fb: FormBuilder ,private router: Router) { }

loginform=this.fb.group  ({
username:["",[Validators.required, Validators.minLength(4)]],
password:["", [Validators.required , Validators.minLength(5)]],
loginas:["",Validators.required]


})


// new() {
//        if(this.loginform.value.password == this.loginform.value.username + "@123"){  
//               // this.router.navigate(['\listing']);     
//             alert("ok")
//             }

           
//         //  else{      
//         //   this.message = "Invalid Credentials"; 

//         //  }   
//   }


ngOnInit() {
  }


}