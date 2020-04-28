import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueDto } from '../models/CollegueDto';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  affichage:boolean;
  modification:boolean;
  creation: boolean;
  collegueSaisi: CollegueDto = new CollegueDto ('','','','',new Date(),'');
  nom2: string;
  urlPost = this.dataService.URL_BACKEND+"collegues";
  cheminImage:string = "https://zupimages.net/up/20/17/2d4s.png"; //"../assets/photo.png";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.affichage = true;
    this.modification = false;
    this.creation = false;
    this.dataService.abonnementCollegueEnCours()
    .subscribe(collegueSelect => this.collegue = collegueSelect)
  }

  modifier(){
    this.affichage = false;
    this.modification = true;
  }

  valider(){
    this.affichage = true;
    this.modification = false;
  }

  creer(){
    this.affichage = false;
    this.creation= true;
    console.log("Création d'un nouveau collègue");
  }

  validerCreation(nom:string, prenoms:string, dateDeNaissance:Date, email:string){
    this.creation = false;
    this.affichage = true;
    const collegueACreer = new CollegueDto(undefined, nom, prenoms, email, dateDeNaissance, "");
    console.log(collegueACreer);
    this.dataService.creationCollegue(collegueACreer);
  }
  retourCreation(){
    this.creation = false;
    this.affichage = true;
  }

}
