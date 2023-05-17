import { League } from './../model/league.model';
import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { AuthService } from '../services/auth.service';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-nomrechercher',
  templateUrl: './nomrechercher.component.html',
  styles: [
  ]
})
export class NomrechercherComponent implements OnInit {

  equipe!:Equipe[];
  id! : number;
  nomequipe!:string;
  
  leagues! : League[];
  allequipe!:Equipe[];

  constructor(public  authService:AuthService,
   private equipeService:EquipeService) { }

  ngOnInit(): void {
    
    this.equipeService.listeEquipe().subscribe(equipe => {
      console.log(equipe);
      this.equipe = equipe;
      });

    
    //this.allequipe=this.equipeService.listeEquipe();
  }
  
 
  onkeyUpp(text:String)
  {
    console.log(text);
    this.equipe=this.allequipe.filter(item=>item.nomEquipe?.toLowerCase().includes(text.toLowerCase()));

  }
  onKeyUp(text:string){
    this.equipeService.rechercherParNom(this.nomequipe).
    subscribe(equipe => {
    this.equipe = equipe;
    console.log(equipe)});
    }

}
