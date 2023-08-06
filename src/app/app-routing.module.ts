import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalComponent } from './personal/personal.component';
import { CovidComponent } from './covid/covid.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { CovidPoliticComponent } from './covid-politic/covid-politic.component';
import { ThankupageComponent } from './thankupage/thankupage.component';

const routes: Routes = [
  {
  path:'', component:LandingPageComponent
},
{path:'personal', component:PersonalComponent},
{path:'covid', component:CovidComponent},
{path:'vaccine', component:VaccineComponent},
{path:'politic', component:CovidPoliticComponent},
{path:'thanku', component:ThankupageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
