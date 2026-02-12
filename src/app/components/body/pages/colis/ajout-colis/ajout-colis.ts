import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Colis } from '../../../../../models/colis';
import { ColisService } from '../../../../../services/colis/colis-service';

@Component({
  selector: 'app-ajout-colis',
  standalone: false,
  templateUrl: './ajout-colis.html',
  styleUrl: './ajout-colis.scss',
})
export class AjoutColis implements OnChanges {
  colis: Colis = {} as Colis;
  @Output() colisEmitter:EventEmitter<Colis> = new EventEmitter();
  @Input() colisModif!:Colis;

  namebutton:String = "Soumettre";

  constructor(private colisService:ColisService){}



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['colisModif'] && this.colisModif) {
      this.colis = { ...this.colisModif }; // copie propre
      this.namebutton = "Modifier";
    }
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
