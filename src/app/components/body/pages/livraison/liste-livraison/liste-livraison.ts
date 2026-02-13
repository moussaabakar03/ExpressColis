import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Livraison } from '../../../../../models/livraison';
import { LivraisonService } from '../../../../../services/livraison/livraison-service';

@Component({
  selector: 'app-liste-livraison',
  standalone: false,
  templateUrl: './liste-livraison.html',
  styleUrl: './liste-livraison.scss',
})
export class ListeLivraison implements OnInit{

  listeLivraisons:Livraison[] = [];
  @Input() livraisonAjoute!:Livraison;
  @Output() livraisonModif:EventEmitter<Livraison> = new EventEmitter();

  constructor(
    private livraisonService:LivraisonService,
    private cdr: ChangeDetectorRef
  ){}

  // constructor(private livraisonService:LivraisonService){}

  initListeLivraison(): void {
    this.livraisonService.listeLivraison().subscribe({
      next: (res: any) => {
        this.listeLivraisons = res;
        this.cdr.detectChanges();
        this.listeLivraisons.push(this.livraisonAjoute);
      },
      error: (e) => {
        console.error("Erreur récupération livraisons:", e);
      }
    });
  }

  
  
  delete(livraison: Livraison) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette livraison ?')) {
      this.livraisonService.delete(livraison.id).subscribe({
        next: () => {
          this.listeLivraisons = this.listeLivraisons.filter(
            l => l.id !== livraison.id
          );
          this.listeLivraisons.splice(this.listeLivraisons.indexOf(livraison), 1);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Erreur suppression :", err);
        }
      });
    }
  }


  modifier(livraison:Livraison){
    this.livraisonModif.emit(livraison);
  }


  ngOnInit(): void {
    this.initListeLivraison();
  }
  
}
