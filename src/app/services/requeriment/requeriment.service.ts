import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requeriment } from 'src/app/models/requeriment';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class RequerimentService {

  private APIEndPoint: string = environment.APIEndPoint

  constructor(
    private httpClient: HttpClient,
    private Token: TokenService
  ) { }

  private setHeader(){
    return {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.Token.get()}`)
    }
  }

  getRequeriments(): Observable<Requeriment[]>{
    return this.httpClient.get<Requeriment[]>(`${this.APIEndPoint}/requeriment`)
  }

  createRequeriment(data: Requeriment): Observable<Requeriment>{
    return this.httpClient.post<Requeriment>(`${ this.APIEndPoint }/requeriment`, data, this.setHeader())
  }

}
