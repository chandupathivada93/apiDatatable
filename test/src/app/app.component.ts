import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';


//import { comments } from './classes/comments';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _CountriesService: CountriesService) {
  }
  displayedColumns: string[] = ['Name', 'Capital', 'Region', 'Population', 'flag'];
  dataSource = CountriesService;

  public firstcomments: any;



ngOnInit(){
  this._CountriesService.getCountries().subscribe(data => { this.firstcomments = data; });
}
}
function toLowerCase() {
  throw new Error('Function not implemented.');
}

