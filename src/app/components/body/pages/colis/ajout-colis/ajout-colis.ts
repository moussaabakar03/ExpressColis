import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Colis } from '../../../../../models/colis';
import { ColisService } from '../../../../../services/colis/colis-service';
import { Client } from '../../../../../models/client';
import { ClientService } from '../../../../../services/client/client-service';

@Component({
  selector: 'app-ajout-colis',
  standalone: false,
  templateUrl: './ajout-colis.html',
  styleUrl: './ajout-colis.scss',
})
export class AjoutColis implements OnChanges, OnInit {
  colis: Colis = {} as Colis;
  clients!:Client[];
  @Output() colisEmitter:EventEmitter<Colis> = new EventEmitter();
  @Input() colisModif!:Colis;

  namebutton:String = "Soumettre";

  constructor(
    private colisService:ColisService,
    private clientService:ClientService,
    private cdr: ChangeDetectorRef

  ){}


  ngOnInit(): void {
    this.listeClient();
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['colisModif'] && this.colisModif) {
      this.colis = { ...this.colisModif }; 
      this.namebutton = "Modifier";
    }
  }

  listeClient(){
    this.clientService.listeClient().subscribe({
      next:(cls:Client[])=>{
        this.clients = cls;
        console.log(this.clients);
        this.cdr.detectChanges();
      }
    });
  }

  traitementFormulaire(): void {
    // if (this.colis.id) {
    //   this.colisService.modifierColis(this.colis, this.colis.id)
    //     .subscribe({
    //       next: (res) => {
    //         this.colisEmitter.emit(res);
    //         this.namebutton = "Soumettre";
    //       }
    //     });

    // } else {

      this.colisService.ajoutColis(this.colis)
        .subscribe({
          next: (res) => {
            this.colisEmitter.emit(res);
          }
        });
    // }
  }

}
