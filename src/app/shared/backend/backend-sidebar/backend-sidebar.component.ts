import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-sidebar',
  templateUrl: './backend-sidebar.component.html',
  styleUrls: ['./backend-sidebar.component.scss']
})
export class BackendSidebarComponent implements OnInit {

  userProfile = {
    "fullname" : "",
    "userstatus" : ""
  }

  constructor(private auth:AuthService) { 
    this.userProfile = this.auth.getUser()
  }
  
  ngOnInit(): void {
  }

  signOut(){
    this.auth.logout()
  }

}
