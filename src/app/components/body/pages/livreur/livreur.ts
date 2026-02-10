import { Component } from '@angular/core';
import { Livreur as ModelLivreur } from '../../../../models/livreur';

@Component({
  selector: 'app-livreur',
  standalone: false,
  templateUrl: './livreur.html',
  styleUrl: './livreur.scss',
})
export class Livreur {

  liste: boolean = true;
  ajout: boolean = false;

  livreur!:ModelLivreur;

  affichageForm(): void{
    this.ajout = true;
    this.liste = false;
  }
  
  affichageListe(): void{
    this.ajout = false;
    this.liste = true;
  }


  recupererLivreAjouter(l:ModelLivreur){
    this.livreur = l;
    this.affichageListe();
  }

}
