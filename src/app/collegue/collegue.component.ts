import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueDto } from '../models/CollegueDTO';
import { CollegueModifDTO } from '../models/CollegueModifDTO';
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
  collegueModifSaisi: CollegueModifDTO = new CollegueModifDTO('','');
  urlPost = this.dataService.URL_BACKEND+"collegues";

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
    this.reinitialiser();
    this.affichage = false;
    this.modification = true;
  }

  validerModification(){
    if (this.collegueModifSaisi.email && this.collegueModifSaisi.photoUrl.length>7){
      this.erreur = false;
      this.affichage = true;
      this.modification = false;
      console.log(this.collegueModifSaisi);
      this.dataService.modificationCollegue(this.collegueModifSaisi, this.collegue);
    }else{
      this.erreur = true;
    }
  }

  creer(){
    this.reinitialiser();
    this.affichage = false;
    this.creation= true;
    console.log("Création d'un nouveau collègue");
  }

  validerCreation(){
    //const collegueACreer = new CollegueDto(undefined, nom, prenoms, email, dateDeNaissance, "");
    console.log(this.collegueSaisi);
    if (this.collegueSaisi.dateDeNaissance && this.collegueSaisi.email && this.collegueSaisi.nom && this.collegueSaisi.photoUrl.length>7 && this.collegueSaisi.prenoms){
      this.erreur = false;
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
    this.reinitialiser();
  }

  retourModification(){
    this.modification = false;
    this.affichage = true;
    this.collegueModifSaisi = new CollegueModifDTO ('','');
  }

  reinitialiser(){
    this.collegueSaisi =  new CollegueDto ('','','','',null,'');
  }

}
