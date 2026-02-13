import { Component } from '@angular/core';
import { Livraison as ModelLivraison } from '../../../../models/livraison';
@Component({
  selector: 'app-livraison',
  standalone: false,
  templateUrl: './livraison.html',
  styleUrl: './livraison.scss',
})
export class Livraison {

  livraison!:ModelLivraison;
  titre:String = "AJout de livraison";

  liste: boolean = true;
  ajout: boolean = false;


  affichageForm(): void{
    this.ajout = true;
    this.liste = false;
  }
  
  affichageListe(): void{
    this.ajout = false;
    this.liste = true;
  }

  recupererLivraisonModif(l:ModelLivraison){
    this.livraison=l;
    this.affichageForm();
    this.titre ="Modifier livraison";
  }

  recupererLivraisonAjouter(l:ModelLivraison){
    this.livraison = l;
    this.affichageListe();
  }
    
}
