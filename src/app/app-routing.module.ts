import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
