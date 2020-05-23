import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRouter:Router) { }

  sendToken(token:string){
    //บันทึกข้อมูลที่ได้ลง local storage
    localStorage.setItem("LoggedInUser",token)
  }

  getToken(){
    //อ่านข้อมูลลง localstorage
    return localStorage.getItem("LoggedInUser")
  }

  isLoggedIn(){
    return this.getToken() !== null
  }

  logout(){
    // ลบข้อมูล local storage
    localStorage.removeItem("LoggedInUser")
    // ให้ back กลับไปที่ login
    this.myRouter.navigate(['/auth/login'])
  }
}
