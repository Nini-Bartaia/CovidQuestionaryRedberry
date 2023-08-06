import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid-politic',
  templateUrl: './covid-politic.component.html',
  styleUrls: ['./covid-politic.component.scss']
})
export class CovidPoliticComponent {

  constructor(private router:Router){}

  politicForm= new FormGroup({
    informal: new FormControl('', Validators.required),
    workday: new FormControl('', Validators.required),
    gathering: new FormControl(''),
    environment: new FormControl('')
  })


 
  


  navigate(){

    console.log(this.politicForm.controls.informal.value)
    console.log(this.politicForm.controls.informal.valid)
    console.log(this.politicForm.controls.workday.value)
    console.log(this.politicForm.controls.workday.valid)
    console.log(this.politicForm.controls.environment.value)
    console.log(this.politicForm.controls.environment.valid)
    console.log(this.politicForm.controls.gathering.value)
    console.log(this.politicForm.controls.gathering.valid)

    if(this.politicForm.valid){

      this.router.navigate(["/thanku"])
    }
  }
}
