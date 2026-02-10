import { Component, Input, SimpleChanges } from '@angular/core';
import { Livreur } from '../../../../../models/livreur';
import { LivreurService } from '../../../../../services/livreur/livreur-service';

@Component({
  selector: 'app-liste-livreur',
  standalone: false,
  templateUrl: './liste-livreur.html',
  styleUrl: './liste-livreur.scss',
})
export class ListeLivreur {

  listeLivreurs:Livreur[] = [];
  @Input() livreurAjoute!:Livreur;

  constructor(private livreurService:LivreurService){}

  delete(livreur:Livreur){
    this.listeLivreurs.splice(this.listeLivreurs.indexOf(livreur), 1);
  }

  initListeLivreur():void{
    this.livreurService.listeEtudiant().subscribe({
      next:(livreurSer:Livreur[])=>{
        this.listeLivreurs = livreurSer;
      },
      error:(e:any)=>{
        console.log("erreur: "+ e);
      }
    });
  }
  
  ngOnInit(): void {
    this.initListeLivreur();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['livreurAjoute'] && this.livreurAjoute) {
      this.listeLivreurs = [
        ...this.listeLivreurs,
        { ...this.livreurAjoute }
      ];
    }
  }
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
