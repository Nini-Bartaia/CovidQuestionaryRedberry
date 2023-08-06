import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent{


isAnimated:boolean=false;


public toggle(){
  this.isAnimated=!this.isAnimated
}

 

}
