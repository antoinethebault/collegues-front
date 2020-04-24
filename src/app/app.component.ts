import { Component } from '@angular/core';
import {Collegues} from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  collegue1 = Collegues.collegue1;
  collegue2 = Collegues.collegue2;
  collegue3 = Collegues.collegue3;

  creer(){
    console.log("Création d'un nouveau collègue");
  }
}
