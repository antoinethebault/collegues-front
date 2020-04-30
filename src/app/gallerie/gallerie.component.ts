import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Gallerie } from '../models/Gallerie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  photos: Gallerie[] = [];
  afficherCollegue: boolean;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.abonnementGallerieEnCours()
    .subscribe(data => this.photos = data);
    this.dataService.getGallerie();
    this.afficherCollegue = false;
  }

  chargerCollegue(matricule:string){
    console.log(matricule);
    this.dataService.viderCache();
    this.dataService.recupererCollegueMatricule(matricule);
    this.router.navigate(['accueil']);
  }

}
