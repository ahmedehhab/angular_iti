import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct, ProductResponse } from '../models/product.interface';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private httpClint:HttpClient){
  }
  getAllProducts(limit: number = 10, skip: number = 0): Observable<ProductResponse> {
    // console.log(`${environment.api}/products?limit=${limit}&skip=${skip}`);
  return this.httpClint.get<ProductResponse>(`${environment.api}/products?limit=${limit}&skip=${skip}`);
}
  getProductById(id:number):Observable<Iproduct>{
    console.log(`${environment.api}/products/${id}`);
    return this.httpClint.get<Iproduct>(`${environment.api}/products/${id}`);
  }
}
