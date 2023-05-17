import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Equipe} from '../model/equipe.model'

import { EquipeService } from '../services/equipe.service';
import { League } from '../model/league.model';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipe?:Equipe[];
  league!:League[];
  constructor(private equipeservices: EquipeService,
    public authService:AuthService) {

    //this.equipe = equipeservices.listeEquipe();
   }

   ngOnInit(): void {
    this.equipeservices.listeEquipe().subscribe(equipe => {
    console.log(equipe);
     this.equipe = equipe;
    // this.equipeservices
    //   .loadImage(equipe[5].image.idImage)
    //   .subscribe((img: Image) => {
    //   equipe[5].imageStr = 'data:' + img.type + ';base64,' + img.image;
    //   console.log(equipe[5].imageStr);
    //   });
      
    this.equipe.forEach((prod) => {
        console.log(prod.image)
      this.equipeservices
      .loadImage(prod.image.idImage)
      .subscribe((img: Image) => {
      prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
      console.log(prod.imageStr);
      });
      });
      });
      console.log(this.equipe);
    
      
    }
  supprimerequipe(p: Equipe)
{
  let conf=confirm("etes vous sur");
  if(conf)
this.equipeservices.supprimerEquipe(p.idEquipe!).subscribe(() => {});
//this.router.navigate(['equipe']).then(() => {
  window.location.reload();
}

}
