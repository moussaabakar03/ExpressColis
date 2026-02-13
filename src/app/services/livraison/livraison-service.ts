import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison } from '../../models/livraison';

@Injectable({
  providedIn: 'root',
})
export class LivraisonService {
  constructor(private http:HttpClient){}

  urlApi="http://localhost:8181/api/livraison";
  private headers = new HttpHeaders({'Content-Type': 'application/json',});

  listeLivraison():Observable<Livraison[]>{
    return this.http.get<Livraison[]>(this.urlApi+"/tous");
  }

  ajoutLivraison(livraison:Livraison):Observable<Livraison>{
    return this.http.post<Livraison>(this.urlApi+"/creer", livraison);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/supprimer/${id}`);
  }
  
  getCountLivraison():Observable<number>{
    return this.http.get<number>(this.urlApi + "/count");
  }
}
