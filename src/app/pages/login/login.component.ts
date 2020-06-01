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

  constructor(private auth:AuthService,private route:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required]],
    })
  }

  submitLogin()
  {

    this.submitted = true;
    if(this.loginForm.valid)
    {    
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
        this.msgStatus = "<p class='text-center alert alert-danger'> Login Fail.</p>";
      }
    }    
  }

}
