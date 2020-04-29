import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { FormsModule } from '@angular/forms';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './apropos/apropos.component';
import { AccueilComponent } from './accueil/accueil.component';

export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent}, 
  { path: 'gallerie', component: GallerieComponent }, 
  { path: 'apropos', component: AProposComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    MenuComponentComponent,
    GallerieComponent,
    AProposComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
