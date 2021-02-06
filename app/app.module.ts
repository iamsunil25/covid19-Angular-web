import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMarqueeModule} from 'ng-marquee';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { COVID19Component } from './navbar/sidebar/covid19/covid19.component';
import { SYMPTOMSComponent } from './navbar/sidebar/covid19/symptoms/symptoms.component';
import { PRECAUTIONComponent } from './navbar/sidebar/covid19/precaution/precaution.component';
import { TREATMENTComponent } from './navbar/sidebar/covid19/treatment/treatment.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { CountryComponent } from './navbar/country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
import { ChartsModule } from 'ng2-charts';
import { StateComponent } from './navbar/state/state.component';
import { MapComponent } from '../app/map/map.component';
import { GlobalComponent } from './navbar/sidebar/global/global.component';
import { DistrictComponent } from './navbar/district/district.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { HindiComponent } from './navbar/hindi/hindi.component';
import { ReferencesComponent } from './navbar/sidebar/references/references.component';
import { AboutusComponent } from './navbar/sidebar/Aboutus/Aboutus.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    COVID19Component,
    SYMPTOMSComponent,
    PRECAUTIONComponent,
    TREATMENTComponent,
    CountryComponent,
    StateComponent,
    MapComponent,
    GlobalComponent,
    DistrictComponent,
    HindiComponent,
    ReferencesComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgMarqueeModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
   MatSelectModule,
    MatTableModule,
    ChartsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSidenavModule
  ], 
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
