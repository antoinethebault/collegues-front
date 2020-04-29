import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private dataService:DataService) { }

  collegue = this.dataService.recupererCollegueCourant();

  ngOnInit(): void {
  }

}
