import { Component } from '@angular/core';
import {Collegues} from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  collegue1 = Collegues.collegues[0];
  collegue2 = Collegues.collegues[1];
  collegue3 = Collegues.collegues[2];

  creer(){
    console.log("Création d'un nouveau collègue");
  }
}
