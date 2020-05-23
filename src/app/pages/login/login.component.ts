import { RouterModule, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData = {
    'username':"",
    'password':""
  }

  msgStatus:string = "";

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  submitLogin()
  {
    if((this.userData.username == "admin")&&(this.userData.password == "1234"))
    {
      this.msgStatus = "<p class='text-center alert alert-success'> Login Success.</p>";
      
      // ส่งค่า username ลง local Storage
      this.auth.sendToken(this.userData.username);
      
      // redirect ไปหน้า backend
      this.route.navigate(['backend']);
    }
    else
    {
      this.msgStatus = "<p class='text-center alert alert-danger'> Login Fail.</p>";
    }
    
  }

}
