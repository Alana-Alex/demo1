import { AbstractControl } from '@angular/forms'; 
 
export class UserNameValidator {
 static shouldBeOnlyAlphabets(control: AbstractControl): any 
 {                  
let regex: RegExp = /^[A-Za-z]+$/; 
 
if (!regex.test(control.value)) {  
      return { "alphabets": true };       
      }     
        return null;  
     } } 

