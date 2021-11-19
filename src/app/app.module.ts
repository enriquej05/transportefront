import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import{FormsModule, ReactiveFormsModule,FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LocationService } from './services/location.service';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    InicioComponent,
    PrincipalComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIaqljkZH92Pu1uE3tfTD0TLQlwHO43iI'
    })
  ],

  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
