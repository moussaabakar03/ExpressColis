import { Component } from '@angular/core';
import { Colis as ModelColis } from '../../../../models/colis';

@Component({
  selector: 'app-colis',
  standalone: false,
  templateUrl: './colis.html',
  styleUrl: './colis.scss',
})
export class Colis {
    colis!:ModelColis;
    titre:String = "AJout de colis";
  
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
  
    recupererColisModif(l:ModelColis){
      this.colis=l;
      this.affichageForm();
      this.titre ="Modifier colis";
    }
  
    recupererColisAjouter(l:ModelColis){
      this.colis = l;
      this.affichageListe();
    }
  

}
