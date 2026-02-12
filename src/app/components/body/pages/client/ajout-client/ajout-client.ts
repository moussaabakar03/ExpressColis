import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Client } from '../../../../../models/client';
import { ClientService } from '../../../../../services/client/client-service';
@Component({
  selector: 'app-ajout-client',
  standalone: false,
  templateUrl: './ajout-client.html',
  styleUrl: './ajout-client.scss',
})
export class AjoutClient implements OnChanges {
  client: Client = {} as Client;
  @Output() clientEmitter:EventEmitter<Client> = new EventEmitter();
  @Input() clientModif!:Client;

  namebutton:String = "Soumettre";


  constructor(private clientService:ClientService){}



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clientModif'] && this.clientModif) {
      this.client = { ...this.clientModif }; // copie propre
      this.namebutton = "Modifier";
    }
  }

  traitementFormulaire(): void {
    if (this.client.id) {
      this.clientService.modifierClient(this.client, this.client.id)
        .subscribe({
          next: (res) => {
            this.clientEmitter.emit(res);
            this.namebutton = "Soumettre";
          }
        });

    } else {

      this.clientService.ajoutClient(this.client)
        .subscribe({
          next: (res) => {
            this.clientEmitter.emit(res);
          }
        });
    }
  }
}
