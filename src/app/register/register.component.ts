import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private fb: FormBuilder,  private router: Router , private route: ActivatedRoute ) { }

  ngOnInit() {
  }

}
