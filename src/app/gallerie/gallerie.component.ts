import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Gallerie } from '../models/Gallerie';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  photos: Gallerie[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.abonnementGallerieEnCours()
    .subscribe(data => {this.photos = data; console.log(this.photos);});
    this.dataService.getGallerie();
  }

}
