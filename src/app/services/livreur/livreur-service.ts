import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur } from '../../models/livreur';

@Injectable({
  providedIn: 'root',
})
export class LivreurService {
  constructor(private http:HttpClient){}

  urlApi="http://localhost:8181/api/livreur";

  listeLivreur():Observable<Livreur[]>{
    return this.http.get<Livreur[]>(this.urlApi+"/tous");
  }

  ajoutLivreur(livreur:Livreur):Observable<Livreur>{
    return this.http.post<Livreur>(this.urlApi+"/creer", livreur);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/supprimer/${id}`);
  }


}
