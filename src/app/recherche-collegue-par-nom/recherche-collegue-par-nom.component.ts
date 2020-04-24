import { Component, OnInit } from '@angular/core';
import { Collegues } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules:string[];
  collegues:Collegue[] = Collegues.collegues;

  constructor() { }

  ngOnInit(): void {
  }

  recherche(){
    const nom = (<HTMLInputElement>document.getElementById("recherche")).value;
    alert("Vous avez tapé :"+nom);
    alert(this.collegues);
    this.collegues.forEach(collegue => {
      alert(collegue.nom+collegue.matricule);
      if (collegue.nom == nom){
        alert('match');
        this.listeMatricules.push(collegue.matricule);
        alert(collegue.matricule+collegue.nom);
      }
    });
    document.getElementById("liste").innerHTML += "<li>"+this.listeMatricules+"</li>";
  }

}
