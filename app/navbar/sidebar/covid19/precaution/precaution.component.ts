import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-precaution',
  templateUrl: './precaution.component.html',
  styleUrls: ['./precaution.component.css']
})
export class PRECAUTIONComponent implements OnInit {
precautionurl:any;
precautionurll:any;
  constructor(private sanitizer:DomSanitizer) { }
 
  ngOnInit(): void {
  this.precautionurl=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/IT7ghcGy6r0");
  this.precautionurll=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zCZGBaDTKlY");
  }
}
