import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Livreur } from '../../../../../models/livreur';
import { LivreurService } from '../../../../../services/livreur/livreur-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-livreur',
  standalone: false,
  templateUrl: './liste-livreur.html',
  styleUrl: './liste-livreur.scss',
})
export class ListeLivreur implements OnInit{

  listeLivreurs:Livreur[] = [];
  @Input() livreurAjoute!:Livreur;
  @Output() livreurModif:EventEmitter<Livreur> = new EventEmitter();

  constructor(
    private livreurService:LivreurService,
    private cdr: ChangeDetectorRef
  ){}

  // constructor(private livreurService:LivreurService){}

  initListeLivreur(): void {
    this.livreurService.listeLivreur().subscribe({
      next: (res: any) => {
        this.listeLivreurs = res.data;
        this.cdr.detectChanges();
        this.listeLivreurs.push(this.livreurAjoute);

      },
      error: (e) => {
        console.error("Erreur récupération livreurs:", e);
      }
    });
  }

  
  
  delete(livreur: Livreur) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livreur ?')) {
      this.livreurService.delete(livreur.id).subscribe({
        next: () => {
          this.listeLivreurs = this.listeLivreurs.filter(
            l => l.id !== livreur.id
          );
          this.listeLivreurs.splice(this.listeLivreurs.indexOf(livreur), 1);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Erreur suppression :", err);
        }
      });
    }
  }


  modifier(livreur:Livreur){
    this.livreurModif.emit(livreur);
  }


  ngOnInit(): void {
    this.initListeLivreur();
  }
  
//   ngOnChanges(changes: SimpleChanges): void {
//   if (changes['livreurAjoute'] && this.livreurAjoute) {

//     const index = this.listeLivreurs.findIndex(
//       l => l.id === this.livreurAjoute.id
//     );

//     if (index !== -1) {
//       this.listeLivreurs[index] = this.livreurAjoute;
//       this.listeLivreurs = [...this.listeLivreurs];
//     }
//   }
// }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['livreurAjoute'] && this.livreurAjoute) {
  //     this.listeLivreurs = [
  //       ...this.listeLivreurs,
  //       { ...this.livreurAjoute }
  //     ];
  //   }
  // }
}




// import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { Livreur } from '../../../../../model/livreur';
// import { LivreurService } from '../../../../../services/livreur/livreur-service';
// import { error } from 'console';

// @Component({
//   selector: 'app-liste-livreur',
//   imports: [],
//   templateUrl: './liste-livreur.html',
//   styleUrl: './liste-livreur.scss',
// })
// export class ListeLivreur implements OnInit{

//   listeLivreurs:Livreur[] = [];
//   @Input() livreurAjoute!:Livreur;

//   constructor(private livreurService:LivreurService){}

  
//   ajout(){
//     this.listeLivreurs.push(this.livreurAjoute);
//   }

//   delete(livreur:Livreur){
//     this.listeLivreurs.splice(this.listeLivreurs.indexOf(livreur), 1);
//     // console.log(livreur);
//   }

//   initListeLivreur():void{
//     this.livreurService.listeEtudiant().subscribe({
//       next:(livreurSer:Livreur[])=>{
//         this.listeLivreurs = livreurSer;
//       },
//       error:(e:any)=>{
//         console.log("erreur: "+ e);
//       }
//     }
//     );
//   }
  
//   ngOnInit(): void {
//     if(this.livreurAjoute){
//       this.ajout();
//     }
//     this.initListeLivreur();

//   }

//   // ngOnChanges(changes: SimpleChanges): void {
//   //   if (changes['livreurAjoute'] && this.livreurAjoute) {
//   //     this.listeLivreurs = [
//   //       ...this.listeLivreurs,
//   //       { ...this.livreurAjoute }
//   //     ];
//   //   }
    
//   // }
  


// }
