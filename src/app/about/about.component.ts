import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ownerName: string = "Vitalik";
  languages = ['C#', 'C++', 'Perl', 'Pascal', 'VB', 'F#'];
  constructor() { }

  ngOnInit() {
  }

}
