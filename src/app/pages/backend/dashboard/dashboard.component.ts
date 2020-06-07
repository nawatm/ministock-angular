import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../../../service/common/constant.service';
import { ProductService } from "../../../service/product.service";

import { AuthService } from "../../../service/auth.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  typeChart:any;
  dataChart:any;
  optionsChart:any;

  typeChart1:any;
  dataChart1:any;
  optionsChart1:any;

  // สร้างตัวแปรรับข้อมูลจาก API
  dataProduct:any=[];

  // กำหนดตัวแปร path รูป
  imageURL:string;

  userProfile = {
    "fullname" : "",
    "userstatus" : ""
  }

  constructor(private api:ProductService,private constant:ConstantService,private auth:AuthService) { 
    this.imageURL = this.constant.baseAPIURLImage
    this.userProfile = this.auth.getUser()
    console.log(this.userProfile)
  }

  ngOnInit(): void {

    // Read product API
    this.api.getProducts().subscribe((data:{})=>{
      this.dataProduct = data
    })

    this.typeChart = "bar";
    this.dataChart = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
      {
        label: "Stock Summary Chart",
        data: [65, 59, 80, 81, 56],
        backgroundColor: ["#1abc9c","#3498db","#9b59b6","#bdc3c7","#f39c12"]
      }
    ]};

    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false
    };

    
  this.typeChart1 = "line";
    this.dataChart1 = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
      {
        label: "Stock Summary Chart",
        data: [65, 59, 80, 81, 56],
        backgroundColor: ["#1abc9c","#3498db","#9b59b6","#bdc3c7","#f39c12"]
      }
    ]};
    
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false
    };


  }




}
