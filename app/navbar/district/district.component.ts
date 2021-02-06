import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import { Data, ChildData, DistrictData } from '../../model';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  allData:Data[];  
  totalData:Data;  
  selectedStateCode:string;  
  selectedDistrictId:string;  
  DistrictSelected:any;
  StateSelected:any;
  selcountryid:string;
  stateData:Data;  
  statewiseData:ChildData[]; 
  districtData: ChildData; 
  districtDataaa:DistrictData[];
  statewiseDataaa:any=[];
  distr:string;
  zila:string;
  c:number;
  r:number;
  a:number;
  d:number;
  jodhpur:any;
  jodhpurr:any=[];
 sunil:DistrictData;
  states:ChildData[];
 districtDataaaa:DistrictData[]; 
 public chartLabels:string[] = ['Total Confirmed','Total Active','Total Recovered','Total Deaths'];
 public chartDataSets:any[]=[0,0,0,0];
 public chartType:string = 'pie';
 public chartColors:any= [
  {
    backgroundColor: ['blue', 'yellow','green', 'red'],
    borderWidth: 2
  }
];
public chartOption:any={
  responsive:true
};
sttt:any;
alldata:any;
datestate:any;
currdate:any;
  constructor(private service: ServicesService) { }  
  ngOnInit() {   
    this.onDistrictData();
    this.service.getAllData().subscribe((x)=>{
 this.sttt=x.statewise;
this.alldata=this.sttt.filter((x) => x.statecode!='TT' && 'UN');
    })
   
  }  
  onDistrictData(){
    this.service.getDistrictData().subscribe(
      (x)=>{
  this.statewiseDataaa=x;
  this.states=this.statewiseDataaa.filter(x=>x.statecode != "UN");
  this.jodhpurr=this.states.find(x=>x.statecode=="RJ").districtData;
  this.jodhpur=this.jodhpurr.find(x=>x.district=="Jodhpur");
      }) 
  }
  onStateSelectedd(sdddd:any){
    this.StateSelected=sdddd;
    this.currdate=this.alldata.find(x=>x.statecode==this.StateSelected);
    this.districtDataaaa=this.states.find(x=>x.statecode==this.StateSelected).districtData;
  }
  getDistrictDataa(){
    this.c=this.sunil.confirmed;
    this.r=this.sunil.recovered;
    this.a=this.sunil.active;
    this.d=this.sunil.deceased;
    this.zila=this.sunil.district;
    this.chartDataSets=[this.c,this.a,this.r,this.d];
  }
  getDistrictData(zilak:any){
    this.DistrictSelected=zilak;
    this.sunil=this.districtDataaaa.find(x=>x.district==this.DistrictSelected);
  }
} 
  