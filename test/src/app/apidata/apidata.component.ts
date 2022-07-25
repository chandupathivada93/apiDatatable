import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  title ="test"
  public countryData = [] as any;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
