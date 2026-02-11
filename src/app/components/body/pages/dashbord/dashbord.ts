import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LivreurService } from '../../../../services/livreur/livreur-service';

@Component({
  selector: 'app-dashbord',
  standalone: false,
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.scss',
})
export class Dashbord implements OnInit{

  nombreLivreurs:number = 0;

  constructor(
    private livreurService:LivreurService,
    private cdr: ChangeDetectorRef
  ){}


  ngOnInit(): void {
    this.nombreLivreur();
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

}
