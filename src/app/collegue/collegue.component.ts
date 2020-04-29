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
  erreur: boolean;
  collegueSaisi: CollegueDto =  new CollegueDto ('','','','',null,'');
  nom2: string;
  urlPost = this.dataService.URL_BACKEND+"collegues";
  //cheminImage:string = "https://zupimages.net/up/20/17/2d4s.png"; //"../assets/photo.png";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.affichage = true;
    this.modification = false;
    this.creation = false;
    this.dataService.abonnementCollegueEnCours()
    .subscribe(collegueSelect => this.collegue = collegueSelect);
    this.erreur = false;
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

  validerCreation(){
    //const collegueACreer = new CollegueDto(undefined, nom, prenoms, email, dateDeNaissance, "");
    console.log(this.collegueSaisi);
    if (this.collegueSaisi.dateDeNaissance && this.collegueSaisi.email && this.collegueSaisi.nom && this.collegueSaisi.photoUrl.length>7 && this.collegueSaisi.prenoms){
      this.creation = false;
      this.affichage = true;
      this.dataService.creationCollegue(this.collegueSaisi);
    }else{
      this.erreur = true;
    }

  }
  retourCreation(){
    this.creation = false;
    this.affichage = true;
  }

}
