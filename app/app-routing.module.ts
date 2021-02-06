import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { COVID19Component } from './navbar/sidebar/covid19/covid19.component';
import { SYMPTOMSComponent } from './navbar/sidebar/covid19/symptoms/symptoms.component';
import { PRECAUTIONComponent } from './navbar/sidebar/covid19/precaution/precaution.component';
import { TREATMENTComponent } from './navbar/sidebar/covid19/treatment/treatment.component';
import {CountryComponent} from './navbar/country/country.component';
import { GlobalComponent } from './navbar/sidebar/global/global.component';
import { StateComponent } from './navbar/state/state.component';
import { DistrictComponent } from './navbar/district/district.component';
import { MapComponent } from '../app/map/map.component';
import { HindiComponent } from './navbar/hindi/hindi.component';
import { AboutusComponent } from './navbar/sidebar/Aboutus/Aboutus.component';
import { ReferencesComponent } from './navbar/sidebar/references/references.component';
const routes: Routes = [
{path:'covid', component:COVID19Component},
{path:'state', component:StateComponent},
{path:'district', component:DistrictComponent},
{path:'map', component:MapComponent},
{path:'country', component:CountryComponent},
{path:'helpline_no.',component:GlobalComponent},
{path:'covid/symptoms', component: SYMPTOMSComponent},
{path:'covid/precaution', component:PRECAUTIONComponent},
{path:'covid/treatment', component:TREATMENTComponent},
{path:'global',component:HindiComponent},
{path:'about_us',component:AboutusComponent},
{path:'references',component:ReferencesComponent},
{path:'', redirectTo:'covid', pathMatch:'full'},
{path:'**', component:MapComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}