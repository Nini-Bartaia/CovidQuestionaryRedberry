import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
 
import { Router } from '@angular/router';
 
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-thankupage',
  templateUrl: './thankupage.component.html',
  styleUrls: ['./thankupage.component.scss']
})
export class ThankupageComponent implements OnInit{

  constructor(private router:Router,private fb:FormBuilder, private myservice:MyserviceService, private http:HttpClient){}
  myForm:FormArray | undefined;

  ngOnInit(){
 
    
    this.myForm= this.fb.array([
      this.myservice.personalForm,
      this.myservice.covidForm,
      this.myservice.vaccineForm,
      this.myservice.politicForm
      
    ])

    
    this.submitData()

    

  }

  
   submitData(){
    console.log(this.myForm)
    const formData = this.myForm?.value;
    this.myservice.postUser(formData).subscribe(res=>{
      console.log('Form data submitted successfully:', res);
    }),
    (e:Error) => {
      console.error('Error submitting form data:', e);
      
    }
   
   }
}
