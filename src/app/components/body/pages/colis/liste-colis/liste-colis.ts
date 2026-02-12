import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colis } from '../../../../../models/colis';
import { ColisService } from '../../../../../services/colis/colis-service';
@Component({
  selector: 'app-liste-colis',
  standalone: false,
  templateUrl: './liste-colis.html',
  styleUrl: './liste-colis.scss',
})
export class ListeColis implements OnInit{

  listeColis:Colis[] = [];
  @Input() colisAjoute!:Colis;
  @Output() colisModif:EventEmitter<Colis> = new EventEmitter();

  constructor(
    private colisService:ColisService,
    private cdr: ChangeDetectorRef
  ){}

  // constructor(private colisService:ColisService){}

  initListeColis(): void {
    this.colisService.listeColis().subscribe({
      next: (res: any) => {
        this.listeColis = res;
        this.cdr.detectChanges();
        this.listeColis.push(this.colisAjoute);

      },
      error: (e) => {
        console.error("Erreur récupération coliss:", e);
      }
    });
  }

  
  
  delete(colis: Colis) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce colis ?')) {
      this.colisService.delete(colis.id).subscribe({
        next: () => {
          this.listeColis = this.listeColis.filter(
            l => l.id !== colis.id
          );
          this.listeColis.splice(this.listeColis.indexOf(colis), 1);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Erreur suppression :", err);
        }
      });
    }
  }


  modifier(colis:Colis){
    this.colisModif.emit(colis);
  }


  ngOnInit(): void {
    this.initListeColis();
  }
  

}
