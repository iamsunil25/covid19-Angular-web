import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit{
displayedColumn:string[]=['Position','Statee','HelplineNo'];
displayedColumn1:string[]=['Position','Territory','HelplineNo'];
dataSource=EXAMPLE_DATA;
dataSource1=EXAMPLE_DATA1;
ngOnInit(){
  }
}
export interface Helpline{
  Position:number;
  Statee:string;
  HelplineNo:number;
  }
 const EXAMPLE_DATA: Helpline[] = [
    {Position:1,Statee:'Andhra Pradesh',HelplineNo:8662410978 },
    {Position:2,Statee:'Arunachal Pradesh',HelplineNo:9436055743},
    {Position:3,Statee:'Assam',HelplineNo:6913347770}, 
    {Position:4,Statee:'Bihar',HelplineNo:104}, 
    {Position:5,Statee:'Chhattisgarh',HelplineNo:104},
    {Position:6,Statee:'Goa',HelplineNo:104}, 
    {Position:7,Statee:'Gujarat',HelplineNo:104},
    {Position:8,Statee:'Haryana',HelplineNo:8558893911}, 
    {Position:9,Statee:'Himachal Pradesh',HelplineNo:104}, 
    {Position:10,Statee:'Jharkhand',HelplineNo:104}, 
    {Position:11,Statee:'Karnataka',HelplineNo:104}, 
    {Position:12,Statee:'Kerala', HelplineNo:4712552056},
    {Position:13,Statee:'Madhya Pradesh',HelplineNo:104},
    {Position:14,Statee:'Maharashtra',HelplineNo:2026127394},
    {Position:15,Statee:'Manipur',HelplineNo:3852411668}, 
    {Position:16,Statee:'Meghalaya',HelplineNo:108}, 
    {Position:17,Statee:'Mizoram',HelplineNo:102}, 
    {Position:18,Statee:'Nagaland',HelplineNo:7005539653}, 
    {Position:19,Statee:'Odisha',HelplineNo:9439994859}, 
    {Position:20,Statee:'Punjab',HelplineNo:104}, 
    {Position:21,Statee:'Rajasthan',HelplineNo:1412225624},
    {Position:22,Statee:'Sikkim',HelplineNo:104}, 
    {Position:23,Statee:'Tamil Nadu',HelplineNo:4429510500},
    {Position:24,Statee:'Telangana',HelplineNo:104}, 
    {Position:25,Statee:'Tripura', HelplineNo:3812315879}, 
    {Position:26,Statee:'Uttarakhand',HelplineNo:104}, 
    {Position:27,Statee:'Uttar Pradesh',HelplineNo:18001805145}, 
    {Position:28,Statee:'West Bengal',HelplineNo:1800313444222},
];
const EXAMPLE_DATA1:Helpline[]= [
  {Position:1,Statee:'Andaman and Nicobar Islands',HelplineNo:3192232102},
    {Position:2,Statee:'Chandigarh',HelplineNo:9779558282 },
    {Position:3,Statee:'Dadra and Nagar Haveli and Daman & Diu', HelplineNo:104 },
    {Position:4,Statee:'Delhi',HelplineNo:1122307145  },
    {Position:5,Statee:'Jammu & Kashmir',HelplineNo:1912520982},
    {Position:6,Statee:'Ladakh',HelplineNo:1982256462  },
    {Position:7,Statee:'Lakshadweep',HelplineNo:104 },
    {Position:8,Statee:'Puducherry',HelplineNo:104 },
];