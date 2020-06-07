import { UserService } from './../../service/user.service';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form Validation
  loginForm:FormGroup
  submitted:boolean = false
  msgStatus:string = "";

  userData = {
    "username":"",
    "password":""
  }

  userLogin = {
    "username" : "",
    "fullname" : "",
    "userstatus" : ""
  }

  constructor(
    private auth:AuthService,
    private route:Router,
    private formBuilder:FormBuilder,
    private api:UserService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required]],
    })
  }

  submitLogin()
  {

    this.submitted = true;
    if(this.loginForm.valid)
    {    
      this.userData.username = this.loginForm.value.username;
      this.userData.password = this.loginForm.value.password;
      this.api.SignIn(this.userData).subscribe((data:{})=>{
        
        if(data["status"]=="success")
        {
          this.msgStatus = "<p class='text-center alert alert-success'> Login Success.</p>";
          //console.log(data);

          // ส่งค่า username ลง local Storage
          //this.userLogin.username = ;
         
          this.userLogin = {
            "username" : this.loginForm.value.username,
            "fullname" : data["fullname"],
            "userstatus" : data["user_status"]
          }

          this.auth.sendToken(this.userLogin);
        
          // redirect ไปหน้า backend
          this.route.navigate(['backend']);
        }
        else
        {
          this.msgStatus = "<p class='text-center alert alert-danger'> Login Fail.</p>";
        }
      });

      
      /*
      if((this.loginForm.value.username == "admin")&&(this.loginForm.value.password == "1234"))
      {
        this.msgStatus = "<p class='text-center alert alert-success'> Login Success.</p>";
        
        // ส่งค่า username ลง local Storage
        this.auth.sendToken(this.loginForm.value.username);
        
        // redirect ไปหน้า backend
        this.route.navigate(['backend']);
      }
      else
      {
        
      }
      */

    }   
  }

}
