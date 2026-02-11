import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Livreur } from './components/body/pages/livreur/livreur';
import { AjoutLivreur } from './components/body/pages/livreur/ajout-livreur/ajout-livreur';
import { ListeLivreur } from './components/body/pages/livreur/liste-livreur/liste-livreur';
import { Dashbord } from './components/body/pages/dashbord/dashbord';

const routes: Routes = [
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
  { path: 'dashbord', component: Dashbord },
  {
    path: 'livreur',
    component: Livreur
    // children: [
    //   { path: 'liste-livreur', component: ListeLivreur },
    //   { path: 'ajout-livreur', component: AjoutLivreur },
    //   { path: '', redirectTo: 'liste-livreur', pathMatch: 'full' }
    // ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
