import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { League } from '../model/league.model';
import { Image } from '../model/image.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
providedIn: 'root'
})
export class EquipeService {
  apiURL: string = ' http://localhost:8090/equipes/api';
  apiURLCat: string = 'http://localhost:8090/equipes/api/leg';
equipe!: Equipe[]; //un tableau de equipe
leagues!: League[] ;

equipeRecherche!: Equipe[];
equipeRecherche2!: Equipe[];
constructor(private http: HttpClient,private authService:AuthService) { }
  /*this.leagues=[{id:1,legue:"ligue1"},{id:2,legue:"Bundesliga"},{id:3,legue:"Premier League"},{id:4,legue:"Serie A"}];
this.equipe = [
  { id : 1, nom: "juvents", classement:1, datematch
: new Date("01/14/2011"),league:this.leagues[3]},
{ id : 2, nom: "paris saint german", classement:6, datematch
: new Date("01/14/2011"),league:this.leagues[0]},
{ id: 3, nom: "bayern munich", classement: 2, datematch
 : new Date("12/17/2010"),league:this.leagues[1]},
{ id: 4, nom:"Manchester-city", classement: 3, datematch
 : new Date("02/20/2020"),league:this.leagues[2]},
 { id : 5, nom: "Milan", classement:7, datematch
: new Date("01/14/2011"),league:this.leagues[3]},
{ id : 5, nom: "Monaco", classement:5, datematch
: new Date("01/14/2011"),league:this.leagues[0]},

  
];
}*/
listeEquipee():Equipe[] {
  return this.equipe;
}
ajouterequipe( e: Equipe){
  this.equipe.push(e);
  }
  supprimerequipe( prod: Equipe){
    //supprimer le produit prod du tableau equipe
    const index = this.equipe.indexOf(prod, 0);
    if (index > -1) {
    this.equipe.splice(index, 1);
    }
    //ou Bien
    /* this.equipe.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.equipe.splice(index, 1);
    }
    }); */
    }
    equipee!:Equipe;
    

updateEquipee(p:Equipe)
{

this.supprimerequipe(p);
this.ajouterequipe(p);
}
listerLeague():League[]{
  return this.leagues;


}



 ajouterleague(l:League){
  this.leagues.push(l);
 }
 // api
 
  ajouterEquipee( equipe: Equipe):Observable<Equipe>{
    return this.http.post<Equipe>(this.apiURL, equipe, httpOptions);
    }
    supprimerEquipee(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterEquipee(id : number): Observable<Equipe>{
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Equipe>(url);
      }
      updateEquipeee(equipe :Equipe) : Observable<Equipe>
{
return this.http.put<Equipe>(this.apiURL, equipe, httpOptions);
}

listeLeague():Observable<League[]>{
  return this.http.get<League[]>(this.apiURL+"/leagues");
  }
  
      consulterLeaguee(id : number): Observable<League>{
        const url = `${this.apiURL}/${id}`;
        return this.http.get<League>(url);
      }
      rechercherParLeaguee(id: number):Observable< Equipe[]> {
        const url = `${this.apiURL}/prodscat/${id}`;
        return this.http.get<Equipe[]>(url);
        }
        rechercherParNome(nom: string):Observable< Equipe[]> {
          const url = `${this.apiURL}/equipeByName/${nom}`;
          return this.http.get<Equipe[]>(url);
          }
          ajouterLeaguee( league: League):Observable<League>{
            return this.http.post<League>(this.apiURL+"/leagues", league, httpOptions);
           }
          
           listeEquipe(): Observable<Equipe[]>{
            let jwt=this.authService.getToken();
            jwt="Bearer "+jwt;
            let headers: HttpHeaders = new HttpHeaders({"Authorization": jwt});
            
            return this.http.get<Equipe[]>(this.apiURL+"/all", {headers: headers});

          }
          ListeLeague(): Observable<League[]>{
            let jwt=this.authService.getToken();
            jwt="Bearer "+jwt;
            let headers: HttpHeaders = new HttpHeaders({"Authorization": jwt});
            return this.http.get<League[]>(this.apiURLCat, {headers: headers});
            }

          ajouterEquipe( e: Equipe):Observable<Equipe>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Equipe>(this.apiURL+"/addequipe", e, {headers:httpHeaders});
            
           
            
        }
        supprimerEquipe(id : number) {
          const url = `${this.apiURL}/deleteequipe/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.delete(url, {headers:httpHeaders});
          }
          consulterEquipe(id: number): Observable<Equipe> {
            const url = `${this.apiURL}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Equipe>(url,{headers:httpHeaders});
            }
            updateEquipe(e :Equipe) : Observable<Equipe> {
              let jwt = this.authService.getToken();
              jwt = "Bearer "+jwt;
              let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.put<Equipe>(this.apiURL+"/updateequipe", e, {headers:httpHeaders});
              }
              ajouterLeague( e: League):Observable<League>{
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.post<League>(this.apiURL+"/addleg", e, {headers:httpHeaders});
                
                }
                rechercherParLeague(idCat: number): Observable<Equipe[]> {
                  let jwt = this.authService.getToken();
                  jwt = "Bearer "+jwt;
                  let httpHeaders = new HttpHeaders({"Authorization":jwt})
                  return this.http.get<Equipe[]>(this.apiURL+"/eqlg/"+idCat, {headers:httpHeaders});
                  
                  } 
                  rechercherParNom(nom: string): Observable<Equipe[]> {
                    let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})
                    return this.http.get<Equipe[]>(this.apiURL+"/equipe/"+nom, {headers:httpHeaders});
                  }
                  uploadImage(file: File, filename: string): Observable<Image>{
                    let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})
                    const imageFormData = new FormData();
                    imageFormData.append('image', file, filename);
                    const url = `${this.apiURL + '/image/upload'}`;
                    return this.http.post<Image>(url, imageFormData,{headers:httpHeaders});
                    }
                    loadImage(id: number): Observable<Image> {
                      let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})

                    const url = `${this.apiURL + '/image/get/info'}/${id}`;
                    return this.http.get<Image>(url,{headers:httpHeaders});
                    }
                    
          
      }
          //with jwt
         
 





  
  
