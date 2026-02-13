import { Client } from "./client";

export interface Colis{
    id:number;
    client: Client;
    typeColis: String;
    poids: DoubleRange;
    adresseExpediteur: String;
    adresseDestinateur: String;
    description:String;
}