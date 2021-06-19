import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModel } from './api-model';

@Injectable({
  providedIn: 'root'
})
export class LeisApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/leisMulheres.json';
  ​
     public get(): Observable<ApiModel[]> {
      return this.http.get<ApiModel[]>(this.apiUrl);
    }

}
