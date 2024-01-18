import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../models/datsInt';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root',})
export class ProductService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<IProduct[]> {
     return this.http.get<IProduct[]>('https://fakestoreapi.com/products?', {
      params: new HttpParams ({
        fromObject: {limit: 100},
// в данном момете я так и не дагадался какже все таки передавать все 100 объектов
      })
          

    })
  }


}
