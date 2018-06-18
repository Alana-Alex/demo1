import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
message:string;
  constructor( private fb: FormBuilder ) { }

  registerform = this.fb.group ({
    email:[""],// ,[Validators.required]],//, Validators.pattern(/^[a-z0-9_-]{@}{8,15}$/)] ],
    password: [""],//, [Validators.required]],
    confirmpassword:[""]//, [Validators.required]]

  })

register(){
  debugger;
  if(this.registerform.value.password == this.registerform.value.confirmpassword)
    {
      this.message="you are successfully registered";
    }
      
  // else{
  //   // this.message="invalid"
  //   alert("fill the terms correctly")
  // }
}
  ngOnInit() {
   
  }

}
