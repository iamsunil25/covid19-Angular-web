import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import { Data, ChildData } from '../../model';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  allData: Data[];  
  totalData: Data;  
  selectedStateCode: string;  
  selectedStateCodee: string; 
  selectedDistrictCode: string;  
  stateData: Data;  
  statewiseData: ChildData[];  
  districtData: ChildData;  
  Rajasthan:any="";
  barChartType:string='pie';
barChartData:any[]=[0,0,0,0];
barChartLabels:string[]=['Total Confirmed','Total Active','Total Recovered','Total Deaths']
barChartColors= [
{
backgroundColor: ['blue','yellow','green','red'],
borderWidth: 2
}
];
//&& 'DL' && 'AN' && 'LD'
  constructor(private service: ServicesService) { }  
  ngOnInit() {  
    this.getAllData();
  } 
  getAllData() {  
    this.service.getAllData().subscribe(  
      response => {  
        this.allData = response.statewise;  
        this.Rajasthan=this.allData.find(x=>x.statecode=='RJ');
        //this.totalData = this.allData.find(x => x.statecode == 'TT');  
        this.allData = this.allData.filter((x) => x.statecode != 'TT' && x.statecode != 'UN');
        this.allData.sort((a: any, b: any) => {
          if (a.state< b.state) {
            return -1;
          } else if (a.state > b.state) {
            return 1;
          } else {
            return 0;
          }
        });
      }  
    )  
  }  

  getStateDataa(){
    this.selectedStateCodee=this.selectedStateCode;
    this.stateData = this.allData.find(x => x.statecode == this.selectedStateCodee)  
    let c=this.stateData.confirmed;
    let r=this.stateData.recovered;
    let a=this.stateData.active;
    let d=this.stateData.deaths;
    this.barChartData=[c,a,r,d];
  }
} 



