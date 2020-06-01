import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'  // Observable
import { ConstantService } from '../service/common/constant.service'

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

  constructor(private http:HttpClient,private constant:ConstantService) { }
  
  // อ่านข้อมูล product ทั้งหมด
  getProducts():Observable<ProductModel>{
    return this.http.get<ProductModel>(this.constant.baseAPIURL + 'products')
  }
  
  createProduct(product):Observable<ProductModel>{
    return this.http.post<ProductModel>(this.constant.baseAPIURL + 'products',JSON.stringify(product),this.httpOptions)
  }
}
