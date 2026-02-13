import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavBar } from './components/nav-bar/nav-bar';
import { Body } from './components/body/body';
import { Footer } from './components/body/footer/footer';
import { Sidebar } from './components/body/sidebar/sidebar';
import { Dashbord } from './components/body/pages/dashbord/dashbord';
import { Livreur } from './components/body/pages/livreur/livreur';
import { AjoutLivreur } from './components/body/pages/livreur/ajout-livreur/ajout-livreur';
import { ListeLivreur } from './components/body/pages/livreur/liste-livreur/liste-livreur';
import { FormsModule } from '@angular/forms';
import { Colis } from './components/body/pages/colis/colis';
import { AjoutColis } from './components/body/pages/colis/ajout-colis/ajout-colis';
import { ListeColis } from './components/body/pages/colis/liste-colis/liste-colis';
import { Client } from './components/body/pages/client/client';
import { AjoutClient } from './components/body/pages/client/ajout-client/ajout-client';
import { ListeClient } from './components/body/pages/client/liste-client/liste-client';
import { Livraison } from './components/body/pages/livraison/livraison';
import { AjoutLivraison } from './components/body/pages/livraison/ajout-livraison/ajout-livraison';
import { ListeLivraison } from './components/body/pages/livraison/liste-livraison/liste-livraison';

@NgModule({
  declarations: [
    App,
    NavBar,
    Body,
    Footer,
    Sidebar,
    Dashbord,
    Livreur,
    AjoutLivreur,
    ListeLivreur,
    Colis,
    AjoutColis,
    ListeColis,
    Client,
    AjoutClient,
    ListeClient,
    Livraison,
    AjoutLivraison,
    ListeLivraison
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
