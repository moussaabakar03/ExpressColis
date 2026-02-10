import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur } from '../../models/livreur';

@Injectable({
  providedIn: 'root',
})
export class LivreurService {
  constructor(private http:HttpClient){}

  urlApi="http://localhost:8181/api/etudiants";

  listeEtudiant():Observable<Livreur[]>{
    return this.http.get<Livreur[]>(this.urlApi);
  }

  ajoutEtudiant(livreur:Livreur):Observable<Livreur>{
    return this.http.post<Livreur>(this.urlApi, livreur);
  }

  // delete(id:number):Observable<any>{
  //   return this.http.delete<Livreur>(this.urlApi+ "${livreur.id}", livreur);
  // }
}
