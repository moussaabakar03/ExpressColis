import { Component } from '@angular/core';
import { Client as ModelClient } from '../../../../models/client';

@Component({
  selector: 'app-client',
  standalone: false,
  templateUrl: './client.html',
  styleUrl: './client.scss',
})
export class Client {
  client!:ModelClient;
  titre:String = "AJout de client";


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

  recupererClientModif(l:ModelClient){
    this.client=l;
    this.affichageForm();
    this.titre ="Modifier client";
  }

  recupererClientAjouter(l:ModelClient){
    this.client = l;
    this.affichageListe();
  }


}
