import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import { Countries,data2} from '../../model';
@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit {
  countries:any=[];
  date:data2;
 india:Countries;
 desh:string;
 indiac:number;
 indiar:number;
 indiad:number;
 indianc:number;
 indianr:number;
 indiand:number;
 pieChartType:string='doughnut';
 pieChartData:any[]=[{data:[],labels:'people'}];
 pieChartLabels:string[]=['Total Confirmed','Total Recovered','Total Deaths','New Confirmed','New Recovered','New Deaths']
 pieChartColors:any= [
  {
    backgroundColor: ['blue', 'green', 'red','cornflowerblue','#90EE90', 'brown'],
  }
];
  constructor(private corona:ServicesService){}
  ngOnInit(){
   this.corona.getGlobal().subscribe((data)=>{
     this.date=data;
     this.india=data.Global;
   this.indiac=this.india.TotalConfirmed;
   this.indiar=this.india.TotalRecovered;
   this.indiad=this.india.TotalDeaths;
   this.indianc=this.india.NewConfirmed
   this.indianr=this.india.NewRecovered;
   this.indiand=this.india.NewDeaths;
   this.pieChartData=[{data:[this.indiac,this.indiar,this.indiad,this.indianc,this.indianr,this.indiand],labels:'people'}];
 })
 
}

}

