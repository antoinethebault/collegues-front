import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import { Gallerie } from '../models/Gallerie';
import { Router } from '@angular/router';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit, OnChanges {

  photos: Gallerie[] = [];
  afficherCollegue: boolean;
  collegue: Collegue;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.abonnementGallerieEnCours()
    .subscribe(data => this.photos = data);
    this.dataService.abonnementCollegueEnCours()
    .subscribe(data => this.collegue = data);
    this.dataService.getGallerie();
    this.afficherCollegue = false;
  }

  ngOnChanges(): void {
    this.afficherCollegue = false;
  }

  chargerCollegue(matricule:string){
    console.log(matricule);
    this.dataService.viderCache();
    this.dataService.recupererCollegueMatricule(matricule);
    this.afficherCollegue = true;
    //this.router.navigate(['accueil']);
  }

  afficherGallerie(){
    this.afficherCollegue = false;
  }

}
