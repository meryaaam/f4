import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './../product';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseUrl = 'http://localhost:8036/api/products';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  getPList(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8036/api/products')
      .pipe(
        tap(songs => console.log('Products fetched!')),
        catchError(this.handleError<Product[]>('Products Songs', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  // findByTitle(title) {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
