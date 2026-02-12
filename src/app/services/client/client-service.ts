import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private http:HttpClient){}

  urlApi="http://localhost:8181/api/client";
  private headers = new HttpHeaders({'Content-Type': 'application/json',});

  listeClient():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi+"/tous");
  }

  ajoutClient(livreur:Client):Observable<Client>{
    return this.http.post<Client>(this.urlApi+"/creer", livreur);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/supprimer/${id}`);
  }

  // modifierClient(livreur:Client, id:number):Observable<Client>{
  //   return this.http.put<Client>(this.urlApi+"modifier", livreur,{headers:this.headers});
  // }

  modifierClient(livreur: Client, id: number): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/modifier/${id}`, livreur);
  }

  countClient():Observable<number>{
    return this.http.get<number>(this.urlApi+"/count");
  }

  
}
