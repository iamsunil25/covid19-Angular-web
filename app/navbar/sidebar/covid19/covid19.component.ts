import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class COVID19Component implements OnInit {
  safeUrl:any;
  public show1:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  public show4:boolean = false;
  public show5:boolean = false;
  public show6:boolean = false;
  public show7:boolean = false;
  public show8:boolean = false;
  public show9:boolean = false;
  public show10:boolean = false;
  toggle1()
  {
    this.show1=!this.show1;
  }
  toggle2()
  {
    this.show2=!this.show2;
  }
  toggle3()
  {
    this.show3=!this.show3;
  }
  toggle4()
  {
    this.show4=!this.show4;
  }
  toggle5()
  {
    this.show5=!this.show5;
  }
  toggle6()
  {
    this.show6=!this.show6;
  }
  toggle7()
  {
    this.show7=!this.show7;
  }
  toggle8()
  {
    this.show8=!this.show8;
  }
  toggle9()
  {
    this.show9=!this.show9;
  }
  toggle10()
  {
    this.show10=!this.show10;
  }
 constructor (private sanitizer:DomSanitizer) {
   }
   ngOnInit(): void {
    this.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/BtN-goy9VOY"); 
  }
}
