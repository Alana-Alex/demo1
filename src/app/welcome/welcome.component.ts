import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( private fb: FormBuilder,private router: Router, private route: ActivatedRoute ) { }

  yesgo(){
    this.router.navigate(['\login']);
  
  }


  nogo() { 
    this.router.navigate(['register']);
   debugger;
  }


  ngOnInit() {
  }


  
}
