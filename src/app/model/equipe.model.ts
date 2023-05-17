import { League } from "./league.model";
import { Image } from "./image.model";

export class Equipe {
    idEquipe? : number;
    nomEquipe? : string;
    paysEquipe?: string;
    
    dateFound? : Date ;
    league!: League;
    image! : Image
    imageStr!:string;
    }