import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituicoesMulheres } from './instituicoes-mulheres';

@Injectable({
  providedIn: 'root'
})
export class InstituicoesApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';
  ​
     public get(): Observable<InstituicoesMulheres[]> {
      return this.http.get<InstituicoesMulheres[]>(this.apiUrl);
    }
}
