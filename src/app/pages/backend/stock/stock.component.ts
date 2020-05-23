import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../service/product.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  //สร้างตัวแปรผูกกับ form
  dataProductAdd = {
        "product_name": "",
        "product_detail": "",
        "product_barcode": "",
        "product_price": "",
        "product_qty": ""
  }

  constructor(private api:ProductService) { }

  ngOnInit(): void {
  }

  submitAddProduct(){
    this.api.createProduct(this.dataProductAdd).subscribe((data:{})=>{
      if(data['status'] == "success"){
        alert("บันทึกรายการสินค้าแล้ว")  
      }
      else{
        alert("บันทึกรายการสินค้าไม่สำเร็จ")
      }
    })
  }
}
