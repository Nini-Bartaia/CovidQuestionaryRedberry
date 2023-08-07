import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-covid-politic',
  templateUrl: './covid-politic.component.html',
  styleUrls: ['./covid-politic.component.scss']
})
export class CovidPoliticComponent {

  constructor(private router:Router, private myservice:MyserviceService){}

 
  politicForm= this.myservice.politicForm

  navigate(){

    
    if(this.politicForm.valid){

      this.router.navigate(["/thanku"])
    }
  }
}
