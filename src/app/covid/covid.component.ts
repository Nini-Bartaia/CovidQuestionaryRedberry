import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent {

constructor(private router:Router){}
  show:boolean=false;
  show2:boolean=false;
  showDate:boolean=false;
  showanother:boolean=false;
  navigate:boolean=false;


  covidForm= new FormGroup({
    hadCovid: new FormControl('', Validators.required),
    antibodies: new FormControl('', Validators.required),
    testDate: new FormControl('', Validators.required ),
    number: new FormControl('', Validators.required),
    covidDate: new FormControl('', Validators.required),
    
  })

  option(event:Event){

    const element= event.target as HTMLInputElement
    const value= element.value
    if (element.labels && element.labels.length > 0) {
      console.log(element.labels[0].textContent);
      
      if(element.labels[0].textContent=="კი"){
       
        this.show=true
        this.showDate = false;
        this.showanother = false;
        this.navigate=false;
      }else{
        this.show=false;
        this.showDate = false;
        this.showanother = false;
        this.navigate=true;
      }
  
      
    }
    
    

  }


  secondoption(event:Event){

    const element= event.target as HTMLInputElement
    const value= element.value

    if(element.labels && element.labels.length > 0){

      console.log(element.labels[0].textContent)


      if(element.labels[0].textContent=="კი"){
        this.showanother=true;
        this.showDate=false;
        this.show=true;
        this.navigate=false;
        
      }else{
          this.showDate=true;
          this.showanother=false;
          this.show=true;
          this.navigate=false;
      }
    }

  }


  navigation(){
  
   

    if((this.covidForm.controls.covidDate.valid == false&& (this.covidForm.controls.testDate.valid==true && this.covidForm.controls.number.valid==true)||((this.covidForm.controls.number.valid == false && this.covidForm.controls.testDate.valid == false) &&this.covidForm.controls.covidDate.valid==true) || this.navigate==true)){
      this.covidForm.controls.covidDate.valid == true
      this.covidForm.controls.number.valid == true
      this.covidForm.controls.testDate.valid == true
    
      this.router.navigate(["/vaccine"])
 
    
  }
  }
}
