import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from './forms.interface';
 
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  myurl:string='http://localhost:3000';

  personalForm= new FormGroup({
    name: new FormControl('',[ Validators.required,Validators.minLength(2)]),
    surname: new FormControl('',[ Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern(/^[^@]+@(redberry)\.ge$/i)])
    

  })

  covidForm= new FormGroup({
    hadCovid: new FormControl('', Validators.required),
    antibodies: new FormControl('', Validators.required),
    testDate: new FormControl('', Validators.required ),
    number: new FormControl('', Validators.required),
    covidDate: new FormControl('', Validators.required),
    
  })

  vaccineForm=new FormGroup({

    vacinnated: new FormControl('',Validators.required),
    step: new FormControl('',Validators.required),
    wait: new FormControl('',Validators.required)

  })

  politicForm= new FormGroup({
    informal: new FormControl('', Validators.required),
    workday: new FormControl('', Validators.required),
    gathering: new FormControl(''),
    environment: new FormControl('')
  })



  postUser(payload:UserData){

    return this.http.post(this.myurl +'/users',payload )

  }
}
