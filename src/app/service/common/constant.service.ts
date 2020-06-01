import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  baseAPIURL = "http://localhost/ministock_api/public/api/";
  baseAPIURLImage = "http://localhost/ministock_api/public/images/stock/";

  constructor() { }
}
