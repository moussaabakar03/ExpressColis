import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colis } from '../../models/colis';

@Injectable({
  providedIn: 'root',
})
export class ColisService {
  constructor(private http:HttpClient){}

  urlApi="http://localhost:8181/api/colis";
  private headers = new HttpHeaders({'Content-Type': 'application/json',});

  listeColis():Observable<Colis[]>{
    return this.http.get<Colis[]>(this.urlApi+"/liste");
  }

  ajoutColis(livreur:Colis):Observable<Colis>{
    return this.http.post<Colis>(this.urlApi+"/creer", livreur);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/supprimer/${id}`);
  }

  // modifierColis(livreur:Colis, id:number):Observable<Colis>{
  //   return this.http.put<Colis>(this.urlApi+"modifier", livreur,{headers:this.headers});
  // }

  // modifierColis(livreur: Colis, id: number): Observable<Colis> {
  //   return this.http.put<Colis>(`${this.urlApi}/modifier/${id}`, livreur);
  // }

  // countColis():Observable<number>{
  //   return this.http.get<number>(this.urlApi+"/count");
  // }

}
