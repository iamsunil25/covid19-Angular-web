import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SYMPTOMSComponent implements OnInit {
 symptomsurl:any;
 symptomsurll:any;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  this.symptomsurl=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/YAc9NabBJzg");
  this.symptomsurll=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/MdOrosJUYhE");
  }

}