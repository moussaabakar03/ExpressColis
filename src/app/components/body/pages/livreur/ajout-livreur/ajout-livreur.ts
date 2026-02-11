import { Component, EventEmitter, Output } from '@angular/core';
import { Livreur } from '../../../../../models/livreur';
import { LivreurService } from '../../../../../services/livreur/livreur-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-livreur',
  standalone: false,
  templateUrl: './ajout-livreur.html',
  styleUrl: './ajout-livreur.scss',
})
export class AjoutLivreur {
  livreur: Livreur = {} as Livreur;
  // @Output() livreurEmitter:EventEmitter<Livreur> = new EventEmitter();

  // constructor(private livreurService:LivreurService){}

  // traitementFormulaire():void{
  //   // if(form.valid){
  //     this.livreurService.ajoutLivreur(this.livreur).subscribe({
  //       next:(livreurServ:Livreur)=>{
  //         this.livreurEmitter.emit(livreurServ);
  //       }
  //     });

  //     // console.log(this.livreur);
  //     // this.livreurEmitter.emit(this.livreur);
  //   // }
  //   // form.resetForm();
  //   // console.log(this.livreur);
  //   // alert(this.livreur.nom + " " + this.livreur.prenom + " "+ this.livreur.adresse);
  //   // this.livreurEmitter.emit({ ...this.livreur });
  // }

  constructor(
    private livreurService: LivreurService,
    private router: Router
  ) {}

  traitementFormulaire(): void {
    this.livreurService.ajoutLivreur(this.livreur).subscribe({
      next: () => {
        this.router.navigate(['/livreur/liste-livreur']);
      }
    });
  }

}
