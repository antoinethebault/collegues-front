import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { Collegues } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listeMatricules:string[];
  collegues:Collegue[];

  //retourne la liste des matricules correspondant au nom recherche
  rechercherParNom(nom: string): string[] {
    this.listeMatricules = [];
    this.collegues = Collegues.collegues;

    this.collegues.forEach(collegue => {
      if (collegue.nom == nom){
        this.listeMatricules.push(collegue.matricule);
      }
    });
    return this.listeMatricules;
  }

  //retourne le collegue utilise
  recupererCollegueCourant(): Collegue {
    return Collegues.collegues[0];
  }

}
