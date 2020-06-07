import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'  // Observable
import { ConstantService } from '../service/common/constant.service'

import { UserModel } from '../models/user.model'



@Injectable({
  providedIn: 'root'
})
export class UserService {

    // Header 
    httpOptions = {
       headers: new HttpHeaders({
         'Content-type':'application/json',
         'Accept':'application/json'
       })
    }


  constructor(private http:HttpClient,private constant:ConstantService) { }

  SignIn(data):Observable<UserModel>{
    return this.http.post<UserModel>(this.constant.baseAPIURL + 'user/login',JSON.stringify(data),this.httpOptions)
  }


}
