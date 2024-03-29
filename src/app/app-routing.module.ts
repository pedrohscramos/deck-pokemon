import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { DeckDetailComponent } from './pages/deck-detail/deck-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'create', component: DeckCreateComponent }, 
  { path: 'decks', component: DeckDetailComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }