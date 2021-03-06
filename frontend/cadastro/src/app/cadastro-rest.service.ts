import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from './const';

@Injectable({
  providedIn: 'root'
})
export class CadastroRestService {

  constructor(private http: HttpClient) { }

  save(cadastro: any): Observable<any> {
    return this.http.post(endpoint + 'pessoa/save', cadastro);
  }

  list(): Observable<any> {
    return this.http.get(endpoint + 'pessoa/list');
  }

  delete(id: any): Observable<any> {
    return this.http.delete(endpoint + 'pessoa/delete/' + id);
  }

}
