import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 //private urll = "https://api.covid19api.com/countries";
 //private urlss = "https://api.covid19india.org/data.json";

  constructor(private http:HttpClient) {}
getGlobal():Observable<any>{
  let urls = 'https://api.covid19api.com/summary';
return this.http.get<any>(urls);
}
getAllData(): Observable<any> {  
  let url = 'https://api.covid19india.org/data.json'  
  return this.http.get(url).  
    pipe((response) => response)  
}  

getStateData(): Observable<any> {  
  let url = 'https://api.covidindiatracker.com/state_data.json'  
  return this.http.get(url).  
    pipe((response) => response)  
}  
getDistrictData():Observable<any>{
  let url='https://api.covid19india.org/v2/state_district_wise.json'
  return this.http.get(url).pipe(x=>x)
}
}