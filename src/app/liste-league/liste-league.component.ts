import { AuthService } from './../services/auth.service';
import { EquipeService } from './../services/equipe.service';
import { League } from './../model/league.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-league',
  templateUrl: './liste-league.component.html',
  styles: [
  ]
})
export class ListeLeagueComponent implements OnInit {
  ajout:boolean=true;
  League=new League();

  league!:League[];
  updatedleague:League = {"idLeg":0,"nomLeague":""};


  constructor(private equipeservices:EquipeService,
    public AuthService : AuthService) { }
   

  ngOnInit(): void {
    this.equipeservices.ListeLeague().subscribe(league => {
      this.league = league;
      console.log(league)
    }
    );
    
  }
  leagueupdated(league:League){
   // this.updatedleague=league;
   this.equipeservices.ajouterleague(league);
   
   console.log("updated league",league);
  }
  updateleg(l : League){
    this.updatedleague=l;
   
    this.ajout=false;
  }
  laegueUpdated(cat:League){
    console.log("Cat updated event",cat);
    this.equipeservices.ajouterLeague(cat).subscribe( ()=> this.chargerLeague());
     
    }
    chargerLeague(){
      this.equipeservices.listeLeague().subscribe(cats => {this.league =cats;
      
      });
      }
      AjouterLeague(){
        console.log(this.League)
          
        this.equipeservices.ajouterLeague(this.League).subscribe(prod => {
          console.log(prod);
          window.location.reload();
      }
        

        );
        this.League=new League();
        this.chargerLeague();
        }
      }


    
 

