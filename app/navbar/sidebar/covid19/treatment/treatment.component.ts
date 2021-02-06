import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TREATMENTComponent implements OnInit {
 treatmenturl:any;
 treatmenturll:any;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.treatmenturl=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/UUm6EY0R_0I");
    this.treatmenturll=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/pFXWpKojuTs");
  }

}