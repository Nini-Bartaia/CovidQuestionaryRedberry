import { Type } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  constructor(private router:Router, private myservice:MyserviceService){

  }

  invalid:boolean=false;
  emailInvalid:boolean=false;
   
  personalForm= this.myservice.personalForm
  validation(event:any){

    const element= event.target as HTMLInputElement
    const value= element.value
    console.log(typeof value)
    
  const numericValue = parseFloat(value);  
  const numericValue2 = parseInt(value, 10);  

  if (!isNaN(numericValue)|| !isNaN(numericValue2) ) {
     
    this.invalid=true;
    
  }
  
  else {
    this.invalid=false
  }
}


mailValidation(){
  
  if(this.personalForm.controls.email.value?.includes("gmail.com")){
    this.emailInvalid=true;
  }else{
    this.emailInvalid=false;
  }
}




navigation(){
  if(this.personalForm.valid){
    this.router.navigate(["/covid"])
  }
}

  }

  

