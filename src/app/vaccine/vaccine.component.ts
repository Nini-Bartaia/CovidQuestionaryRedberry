import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss']
})
export class VaccineComponent {


  constructor(private router:Router){}
  show:boolean=false;
  show2:boolean=false;
  next:boolean=false;
  recommend:boolean=false;
  next2:boolean=false;

  vaccineForm=new FormGroup({

    vacinnated: new FormControl('',Validators.required),
    step: new FormControl('',Validators.required),
    wait: new FormControl('',Validators.required)

  })
  vaccine(event:Event){

    const element= event.target as HTMLInputElement
    const value= element.value
    if (element.labels && element.labels.length > 0){

      


      if(element.labels[0].textContent=="კი"){

        this.show=true;
        this.show2=false;
        this.next=false;
        this.recommend=false;
        this.next2=false;
      }else{

        this.show=false;
        this.next=false;
        this.show2=true;
        this.recommend=false;
        this.next2=false;
      }
    }
  

  }

  check(event:Event){
    const element= event.target as HTMLInputElement
    
    if(element.labels && element.labels.length>0){
      
      if(element.labels[0].textContent=="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე" || element.labels[0].textContent=="სრულად აცრილი ვარ"){
          this.next=true;
          this.next2=false;
          this.recommend=false;
      }else{
        this.recommend=true;
        this.next=false;
        this.next2=false;
      }
    }

  }

  check2(event:Event){
    const element= event.target as HTMLInputElement
    
    if(element.labels && element.labels.length>0){
      
      if(element.labels[0].textContent=="დარეგისტრირებული ვარ და ველოდები რიცხვს" || element.labels[0].textContent=="არ ვგეგმავ"){
          this.next=false;
          this.recommend=false;
          this.next2=true;
      }else{
        this.recommend=true;
        this.next=false;
        this.next2=false;
      }
    }

  }

  navigate(){

    if((this.next ||this.next2 ) || this.recommend==true ){

      this.router.navigate(["/politic"])

    }
  }



}
