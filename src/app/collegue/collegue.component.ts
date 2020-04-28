import { Component, OnInit, Input} from '@angular/core';
import {Collegue} from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  affichage:boolean;
  cheminImage:string = "https://zupimages.net/up/20/17/2d4s.png"; //"../assets/photo.png";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.affichage = true;
    this.dataService.abonnementCollegueEnCours()
    .subscribe(collegueSelect => this.collegue = collegueSelect)
  }

  modifier(){
    this.affichage = false;
  }

  valider(){
    this.affichage = true;
  }

}
