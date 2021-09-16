import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { CrudModule } from './crud.module';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:8080/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(product: any): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/product', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/product/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/product')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, product: any): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/product/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number): Observable<Product>{
    console.log("inside delete");
    console.log(id);
    let API_URL= `${this.apiServer}/product/${id}`;
    console.log(API_URL);
    return this.httpClient.delete<Product>(API_URL,this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }


}