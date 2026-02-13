import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../../../../../models/client';
import { ClientService } from '../../../../../services/client/client-service';
@Component({
  selector: 'app-liste-client',
  standalone: false,
  templateUrl: './liste-client.html',
  styleUrl: './liste-client.scss',
})
export class ListeClient implements OnInit{

  listeClients:Client[] = [];
  @Input() clientAjoute!:Client;
  @Output() clientModif:EventEmitter<Client> = new EventEmitter();

  constructor(
    private clientService:ClientService,
    private cdr: ChangeDetectorRef
  ){}

  // constructor(private clientService:ClientService){}

  initListeClient(): void {
    this.clientService.listeClient().subscribe({
      next: (res: Client[]) => {
        this.listeClients = res;
        this.cdr.detectChanges();
        console.log(this.listeClients);
      },
      error: (e) => {
        console.error("Erreur récupération clients:", e);
      }
    });
  }

  
  
  suppresion(client: Client) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.clientService.delete(client.id).subscribe({
        next: () => {
          this.listeClients = this.listeClients.filter(
            l => l.id !== client.id
          );
          this.listeClients.splice(this.listeClients.indexOf(client), 1);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Erreur suppression :", err);
        }
      });
    }
  }


  modifier(client:Client){
    this.clientModif.emit(client);
  }


  ngOnInit(): void {
    this.initListeClient();
    if(this.clientAjoute){
        this.listeClients.push(this.clientAjoute);
    }
  }
  
}
