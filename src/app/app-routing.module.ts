import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import{LoginComponent} from './components/login/login.component';
import{RegisterComponent} from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthUserGuard } from './guards/authuser.guard';
import { PrincipalComponent } from './components/principal/principal.component';


const routes: Routes = [
  {
    path: 'login',component: LoginComponent, canLoad: [ AuthUserGuard]
  },
  {
    path: 'register',component: RegisterComponent, canLoad: [ AuthUserGuard]
  },
  {
    path: 'home',component: HomeComponent,canActivate: [AuthGuard]
  },
  {
    path: 'inicio',component: InicioComponent
  },
  {
    path: 'principal',component: PrincipalComponent
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
