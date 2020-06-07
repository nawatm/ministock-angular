import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile = {
    "fullname":"",
    "userstatus": ""
  }

  constructor(private myRouter:Router) { }

  sendToken(token:any){
    //บันทึกข้อมูลที่ได้ลง local storage
    localStorage.setItem("LoggedInUser",token['username'])
    localStorage.setItem("LoggedFullname",token['fullname'])
    localStorage.setItem("LoggedStatus",token['userstatus'])
  }

  getUser(){
    this.userProfile.fullname = localStorage.getItem("LoggedFullname")
    this.userProfile.userstatus = localStorage.getItem("LoggedStatus")
    return this.userProfile
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
    localStorage.removeItem("LoggedFullname")
    localStorage.removeItem("LoggedStatus")
    // ให้ back กลับไปที่ login
    this.myRouter.navigate(['/auth/login'])
  }
}
