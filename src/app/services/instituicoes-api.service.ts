import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModel } from './api-model';

@Injectable({
  providedIn: 'root'
})
export class InstituicoesApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';
  ​
     public get(): Observable<ApiModel[]> {
      return this.http.get<ApiModel[]>(this.apiUrl);
    }
}
