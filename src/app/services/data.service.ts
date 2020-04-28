import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { Collegues } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from '../../environments/environment';
//import {AppComponent} from '../app.component';
import { Observable, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
  

  listeMatricules:string[];
  collegues:Collegue[];
  URL_BACKEND = environment.backendUrl;
  private collegueEnCours = new Subject<Collegue>();

  //retourne la liste des matricules correspondant au nom recherche
  rechercherParNom(nom: string): string[] {
    this.listeMatricules = [];
    this.collegues = Collegues.collegues;

    /*this.collegues.forEach(collegue => {
      if (collegue.nom == nom){
        this.listeMatricules.push(collegue.matricule);
      }
    });*/
    this._http.get(this.URL_BACKEND+"collegues?nom="+nom) .subscribe((data: string[]) => {
      for (let i=0; i<data.length; i++){
        this.listeMatricules.push(data[i]);
      }
    }, (error:any) => {
      console.log("erreur lors de la requete de recherche par nom");
    });
    return this.listeMatricules;
  }

  //retourne le collegue utilise
  recupererCollegueCourant(): Collegue {
    return Collegues.collegues[0];
  }
  
  recupererCollegueMatricule(matricule:string) {
    this._http.get(this.URL_BACKEND+"collegues/"+matricule) .subscribe((data: Collegue) => {
      //this.app.afficherCollegue(data);
      this.collegueEnCours.next(data);
    }, (error:any) => {
      console.log("erreur lors de la requete de recherche par matricule");
    });
  }

  abonnementCollegueEnCours(): Observable<Collegue> {
    return this.collegueEnCours.asObservable();
  }

}
