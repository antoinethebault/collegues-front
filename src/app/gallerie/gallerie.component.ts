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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.abonnementGallerieEnCours()
    .subscribe(data => this.photos = data);
    this.dataService.getGallerie();
  }

  chargerCollegue(matricule:string){
    console.log(matricule);
    this.dataService.recupererCollegueMatricule(matricule);
    this.router.navigate(['accueil']);
  }

}
