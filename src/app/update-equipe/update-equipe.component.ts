import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';
import { Equipe} from '../model/equipe.model';
import { League } from '../model/league.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: [
  ]
})
export class UpdateEquipeComponent implements OnInit {
  currentEquipe = new Equipe();
  league!:League[];
  updatedid!:number;
  myImage! : string;
  uploadedImage!: File;
isImageUpdated: Boolean=false;

 
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private equipeService: EquipeService) { }

  ngOnInit(): void {
    //this.league=this.equipeService.listerLeague();
    this.equipeService.ListeLeague().subscribe(leagues => {
      this.league = leagues;
    });
    this.equipeService.consulterEquipe(this.activatedRoute.snapshot.params['id']).subscribe((equipe) => {
      console.log(equipe);
      this.currentEquipe = equipe;
      this.updatedid=this.currentEquipe.league.idLeg;
    
    this.equipeService.loadImage(this.currentEquipe.image.idImage).subscribe((img:Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image;
console.log("aaaa"+this.myImage);
}); 
    });
    
  
  
  }
  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    }
  updateEquipe() {
    this.currentEquipe.league = this.league.
    find(cat => cat.idLeg == this.updatedid)!;
    if (this.isImageUpdated)
{
this.equipeService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.currentEquipe.image = img;
this.equipeService
.updateEquipe(this.currentEquipe)
.subscribe((prod) => {
this.router.navigate(['equipe']);
});
});
}
else{
   this.equipeService.updateEquipe(this.currentEquipe).subscribe(prod => {
   this.router.navigate(['equipe']); }
   );
   

}
}
}

