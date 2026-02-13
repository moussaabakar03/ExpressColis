import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Livraison } from '../../../../../models/livraison';
import { Colis } from '../../../../../models/colis';
import { Livreur } from '../../../../../models/livreur';
import { LivraisonService } from '../../../../../services/livraison/livraison-service';
import { ColisService } from '../../../../../services/colis/colis-service';
import { LivreurService } from '../../../../../services/livreur/livreur-service';

@Component({
  selector: 'app-ajout-livraison',
  standalone: false,
  templateUrl: './ajout-livraison.html',
  styleUrl: './ajout-livraison.scss',
})
export class AjoutLivraison  implements OnInit, OnChanges {

  livraison: Livraison = {} as Livraison;

  colisList: Colis[] = [];
  livreurList: Livreur[] = [];

  @Input() livraisonModif!: Livraison;
  @Output() livraisonEmitter: EventEmitter<Livraison> = new EventEmitter();

  namebutton: string = "Soumettre";

  constructor(
    private livraisonService: LivraisonService,
    private colisService: ColisService,
    private livreurService: LivreurService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.listeColis();
    this.listeLivreur();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['livraisonModif'] && this.livraisonModif) {
      this.livraison = { ...this.livraisonModif };
      this.namebutton = "Modifier";
    }
  }

  listeColis() {
    this.colisService.listeColis().subscribe({
      next: (res: any) => {
        this.colisList = res;
        this.cdr.detectChanges();
      }
    });
  }

  listeLivreur() {
    this.livreurService.listeLivreur().subscribe({
      next: (res: any) => {
        this.livreurList = res.data;
        this.cdr.detectChanges();
      }
    });
  }

  traitementFormulaire(): void {

    // if (this.livraison.id) {
    //   this.livraisonService.modifierLivraison(this.livraison, this.livraison.id)
    //     .subscribe({
    //       next: (res) => {
    //         this.livraisonEmitter.emit(res);
    //         this.resetForm();
    //       }
    //     });
    // } else {
      this.livraisonService.ajoutLivraison(this.livraison)
        .subscribe({
          next: (res:Livraison) => {
            this.livraisonEmitter.emit(res);
            this.resetForm();
          }
        });
    // }
  }

  resetForm() {
    this.livraison = {} as Livraison;
    this.namebutton = "Soumettre";
  }
}
