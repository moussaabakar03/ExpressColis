import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur } from '../../models/livreur';

@Injectable({
  providedIn: 'root',
})
export class LivreurService {
  constructor(private http:HttpClient){}

  urlApi="http://localhost:8181/api/livreur";
  private headers = new HttpHeaders({'Content-Type': 'application/json',});

  listeLivreur():Observable<Livreur[]>{
    return this.http.get<Livreur[]>(this.urlApi+"/tous");
  }

  ajoutLivreur(livreur:Livreur):Observable<Livreur>{
    return this.http.post<Livreur>(this.urlApi+"/creer", livreur);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/supprimer/${id}`);
  }

  // modifierLivreur(livreur:Livreur, id:number):Observable<Livreur>{
  //   return this.http.put<Livreur>(this.urlApi+"modifier", livreur,{headers:this.headers});
  // }

  modifierLivreur(livreur: Livreur, id: number): Observable<Livreur> {
    return this.http.put<Livreur>(`${this.urlApi}/modifier/${id}`, livreur);
  }

  countLivreur():Observable<number>{
    return this.http.get<number>(this.urlApi+"/count");
  }



}
