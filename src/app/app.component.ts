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
}
