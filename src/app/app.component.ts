import { Component } from '@angular/core';
import {Collegues} from './mock/collegues.mock';
import {DataService} from './services/data.service';
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  //dataService = new DataService();
  collegue = this.dataService.recupererCollegueCourant();

  constructor (private dataService:DataService){}
  //collegue1 = Collegues.collegues[0];
  //collegue2 = Collegues.collegues[1];
  //collegue3 = Collegues.collegues[2];

  
}
