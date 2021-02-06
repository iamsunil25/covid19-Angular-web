export class Data {  
    active: number;  
    confirmed: number;  
    deaths: number;  
    lastupdatedtime: string;  
    recovered: number;  
    state: string;  
    statecode: string;  
}  
export class ChildData {  
    id: string;  
    state: string; 
    statecode: string;  
    district:string;
    districtData: DistrictData[];  
} 
export class DistrictData { 
  district:string;
  notes:string;
  active:number;
  confirmed:number;
  deceased:number;
  recovered:number;
}  
export class Countries{
  TotalConfirmed:number;
  TotalRecovered:number;
  TotalDeaths:number;
  NewConfirmed:number;
  NewRecovered:number;
  NewDeaths:number;
  Country:string;
}
export class data2{
  Date:string;
  Global:Countries[];
  Countries:Countries[];
}