import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-navbar',
  templateUrl: './backend-navbar.component.html',
  styleUrls: ['./backend-navbar.component.scss']
})
export class BackendNavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.auth.logout()
  }
}
