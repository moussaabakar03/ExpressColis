import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LivreurService } from '../../../../services/livreur/livreur-service';
import { ClientService } from '../../../../services/client/client-service';
import { LivraisonService } from '../../../../services/livraison/livraison-service';

@Component({
  selector: 'app-dashbord',
  standalone: false,
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.scss',
})
export class Dashbord implements OnInit{

  nombreLivreurs:number = 0;
  nombreClients:number = 0;
  nombreLivraisons:number = 0;

  constructor(
    private livreurService:LivreurService,
    private clientService:ClientService,
    private livraisonService:LivraisonService,
    private cdr: ChangeDetectorRef
  ){}


  ngOnInit(): void {
    this.nombreLivreur();
    this.nombreClient();
  }
  
  
  nombreLivreur(){
    return this.livreurService.countLivreur().subscribe(
      {
        next: (nbre:number)=>{
          this.nombreLivreurs = nbre;
          this.cdr.detectChanges();
        }
      }
    );
  }

  nombreClient(){
    return this.clientService.countClient().subscribe(
      {
        next: (nbre:number)=>{
          this.nombreClients = nbre;
          this.cdr.detectChanges();
        }
      }
    );
  }


  nombreLivraison(){
    return this.livraisonService.getCountLivraison().subscribe(
      {
        next: (nbre:number)=>{
          this.nombreLivraisons = nbre;
          this.cdr.detectChanges();
        }
      }
    );
  }

}
