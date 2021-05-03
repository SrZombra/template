import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requeriment } from 'src/app/models/requeriment';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequerimentService {

  private APIEndPoint: string = environment.APIEndPoint

  constructor(
    private httpClient: HttpClient
  ) { }

  getRequeriments(): Observable<Requeriment[]>{
    return this.httpClient.get<Requeriment[]>(`${this.APIEndPoint}/requeriment`)
  }

}
