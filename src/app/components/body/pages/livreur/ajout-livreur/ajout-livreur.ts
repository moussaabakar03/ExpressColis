import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Livreur } from '../../../../../models/livreur';
import { LivreurService } from '../../../../../services/livreur/livreur-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-livreur',
  standalone: false,
  templateUrl: './ajout-livreur.html',
  styleUrl: './ajout-livreur.scss',
})
export class AjoutLivreur implements OnChanges {
  livreur: Livreur = {} as Livreur;
  @Output() livreurEmitter:EventEmitter<Livreur> = new EventEmitter();
  @Input() livreurModif!:Livreur;

  namebutton:String = "Soumettre";


  constructor(private livreurService:LivreurService){}



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['livreurModif'] && this.livreurModif) {
      this.livreur = { ...this.livreurModif }; // copie propre
      this.namebutton = "Modifier";
    }
  }

  traitementFormulaire(): void {
    if (this.livreur.id) {
      this.livreurService.modifierLivreur(this.livreur, this.livreur.id)
        .subscribe({
          next: (res) => {
            this.livreurEmitter.emit(res);
            this.namebutton = "Soumettre";
          }
        });

    } else {

      this.livreurService.ajoutLivreur(this.livreur)
        .subscribe({
          next: (res) => {
            this.livreurEmitter.emit(res);
          }
        });
    }
  }

  // traitementFormulaire():void{
  //   // if(form.valid){
  //   if(this.livreurModif?.id){
  //     this.livreurService.modifierLivreur(this.livreur, this.livreur.id);
  //     this.namebutton = "Modifier";
  //   }
  //   else{
  //     this.livreurService.ajoutLivreur(this.livreur).subscribe({
  //       next:(livreurServ:Livreur)=>{
  //         this.livreurEmitter.emit(livreurServ);
  //       }
  //     });
  //     this.namebutton = "Soumettre";
  //   }
      

      // console.log(this.livreur);
      // this.livreurEmitter.emit(this.livreur);
    // }
    // form.resetForm();
    // console.log(this.livreur);
    // alert(this.livreur.nom + " " + this.livreur.prenom + " "+ this.livreur.adresse);
    // this.livreurEmitter.emit({ ...this.livreur });
  // }

  

  
    // --- router ---
  // constructor(
  //   private livreurService: LivreurService,
  //   private router: Router
  // ) {}


  // traitementFormulaire(): void {
  //   this.livreurService.ajoutLivreur(this.livreur).subscribe({
  //     next: () => {
  //       this.router.navigate(['/livreur/liste-livreur']);
  //     }
  //   });
  // }

}
