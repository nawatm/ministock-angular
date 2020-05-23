import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'  // Observable

// Model Product
import { ProductModel } from '../models/product.model'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // กำหนด  Base URL
  apiURL = "http://localhost/ministock_api/public/api/";

  // Header 
  httpOptions = {
     headers: new HttpHeaders({
       'Content-type':'application/json',
       'Accept':'application/json'
     })
  }

  constructor(private http:HttpClient) { }
  
  // อ่านข้อมูล product ทั้งหมด
  getProducts():Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiURL + 'products')
  }
  
  createProduct(product):Observable<ProductModel>{
    return this.http.post<ProductModel>(this.apiURL + 'products',JSON.stringify(product),this.httpOptions)
  }
}
