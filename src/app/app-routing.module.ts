import { GameGuard } from './game.guard';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  GameComponent } from './game/game.component';
import {AddGameComponent} from './add-game/add-game.component'
import { UpdateGameComponent } from './update-game/update-game.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';

const routes: Routes = [
  {path:"game",component:GameComponent},
  {path:"add-game",component:AddGameComponent,canActivate:[GameGuard]},
  {path:"" ,redirectTo:"game",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:"update-game/:id",component:UpdateGameComponent,canActivate:[GameGuard]},
  {path:"rechercheParGenre",component:RechercheParGenreComponent},
  {path:"nomrechercher",component:NomrechercherComponent},
  {path:"listeGenre",component:ListeGenreComponent,canActivate:[GameGuard]}


  

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
