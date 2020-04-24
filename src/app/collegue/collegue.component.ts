import { Component, OnInit, Input} from '@angular/core';
import {Collegue} from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  affichage:boolean;
  cheminImage:string = "../assets/photo.png";

  constructor() { }

  ngOnInit(): void {
    this.affichage = true;
  }

  modifier(){
    this.affichage = false;
  }

  valider(){
    this.affichage = true;
  }

}
