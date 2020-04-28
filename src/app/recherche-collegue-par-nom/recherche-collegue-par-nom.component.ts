import { Component, OnInit } from '@angular/core';
import { Collegues } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules:string[] = [];
  collegues:Collegue[] = Collegues.collegues;

  constructor(private _srv:DataService) { }

  ngOnInit(): void {
  }

  //fonction appelee si on clique sur le bouton recherche
  //elle aliment la liste des matricules dont le nom correspond
  //la liste est affichee via des *ngFor
  recherche(){
    this.listeMatricules = [];
    const nom = (<HTMLInputElement>document.getElementById("recherche")).value;
    this.listeMatricules = this._srv.rechercherParNom(nom);
  }

  activeCollegue(matricule:string){
    this._srv.recupererCollegueMatricule(matricule);
  }

}
