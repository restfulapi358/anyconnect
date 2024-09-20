import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ScoreComponentServiceClient {
          
    constructor(
    public sanitizer:DomSanitizer,
    public _httpClient: HttpClient
    ){}


    public Score(data, env){

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',  // Example header
            'Authorization':'Bearer ' + env.Authorized
          });

          if(env.Authorized==='X-Asynmous-User-ID'){            
            headers = new HttpHeaders({
                'Content-Type': 'application/json',  // Example header
                'X-Asynmous-User-ID':'X-Asynmous-API-ID'
              });            
          }

          const SCORE_URL:string = env.ScoreUrl;



        return this._httpClient.post<any>(
            SCORE_URL,
            data,
            { headers: headers }
            );
    }


}


