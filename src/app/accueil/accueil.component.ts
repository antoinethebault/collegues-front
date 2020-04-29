import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  collegue = this.dataService.recupererCollegueCourant();

  constructor(private dataService:DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const matricule = this.route.snapshot.paramMap.get('matricule');
    this.dataService.recupererCollegueMatricule(matricule);
  }

  

}
