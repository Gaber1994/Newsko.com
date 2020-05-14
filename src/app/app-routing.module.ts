import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent} from './health/health.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from "./home/home.component";




const routes: Routes = [ 
{path: '' , redirectTo:'Home' , pathMatch:'full'},  //make home main path for all routing 
{path: 'Home' , component: HomeComponent},
{path: 'sports' , component: SportsComponent}, //select  which commponant depends on home ];
{path: 'Entertainment' , component: EntertainmentComponent},
{path: 'Health' , component: HealthComponent},
{path: 'SignIn' , component: SigninComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
