import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalComponent } from './personal/personal.component';
import { CovidComponent } from './covid/covid.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { CovidPoliticComponent } from './covid-politic/covid-politic.component';
import { ThankupageComponent } from './thankupage/thankupage.component';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PersonalComponent,
    CovidComponent,
    VaccineComponent,
    CovidPoliticComponent,
    ThankupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
