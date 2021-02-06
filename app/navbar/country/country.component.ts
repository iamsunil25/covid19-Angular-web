import { Component, OnInit } from '@angular/core';
import { Countries, data2 } from 'src/app/model';
import {ServicesService} from '../../services/services.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 countries:Countries[];
 country:any;
 date:data2;
 SelectedCountry:any="";
india:Countries;
Selectedcnt:any;
desh:string;
indiac:number;
indiar:number;
indiad:number;
indianc:number;
indianr:number;
indiand:number;
 pieChartLabels:string[] = ['Total Confirmed','Total Recovered','Total Deaths','New Confirmed','New Recovered','New Deaths'];
 pieChartData:number[] = [0,0,0,0,0,0];
 pieChartType:string = 'pie';
 pieChartColors:any= [
  {
    backgroundColor: ['blue', 'green', 'red','cornflowerblue','#90EE90', 'brown'],
    borderWidth: 2
  }
];
 constructor(private corona:ServicesService){}
 ngOnInit(){
  this.corona.getGlobal().subscribe((data)=>{
    this.countries=data.Countries;
    this.date=data;
    this.india=data.Countries.find((x)=>x.Country =="India");
 
   })
  }
  getCorona()
  {
  this.SelectedCountry=this.countries.find((x)=> x.Country == this.Selectedcnt);
  let c=this.SelectedCountry.TotalConfirmed;
  let r=this.SelectedCountry.TotalRecovered;
  let d =this.SelectedCountry.TotalDeaths;
  let nc=this.SelectedCountry.NewConfirmed;
  let nr=this.SelectedCountry.NewRecovered;
  let nd =this.SelectedCountry.NewDeaths;
   this.pieChartData=[c,r,d,nc,nr,nd];
  } 
}