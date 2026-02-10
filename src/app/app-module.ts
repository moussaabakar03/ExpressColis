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
    ListeLivreur
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
