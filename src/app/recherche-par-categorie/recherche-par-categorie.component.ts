import { EquipeService } from './../services/equipe.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { League } from '../model/league.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  equipe!:Equipe[];
  id! : number;
leagues! : League[];

  constructor(public  authService:AuthService,
   private equipeService:EquipeService) { }

  ngOnInit(): void {
    //this.leagues=this.equipeService.listerLeague();
    //this.equipe=this.equipeService.listeEquipe();
    this.equipeService.listeEquipe().subscribe(equipe => {
      this.equipe = equipe;

    }
    );
    this.equipeService.ListeLeague().subscribe(leagues => {
      this.leagues = leagues;
      console.log(leagues)

    }
    );
  }
  onChange()
  {
    this.equipeService.rechercherParLeague(this.id).subscribe(equipe => {
      this.equipe = equipe;

    }
    )

  }
 
  

}
