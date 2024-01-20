import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/datsInt';
import { Observable } from 'rxjs';
import { test } from '../../models/testData';
import { ProductService } from '../../requests/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl : './product.component.scss'
})
export class ProductComponent implements OnInit {

  filter = ''
  link : string = ''
  productGet : any
  categories : any  
  default_url : string  = ""
  constructor(private http: HttpClient, private ProductService : ProductService){
  

  }
  getCategory(item : string){
    this.link = item
    console.log(this.link );
  }
  getProductByCategeory(category: string){
    this.http.get( `https://dummyjson.com/products/category/${category}`).subscribe(res  => {
      this.productGet = res})
      
  }
  getAllProduct(){
    this.http.get(`https://dummyjson.com/products`).subscribe(res => {
console.log(res);
this.productGet = res

    })
  }
  
  getAllCategory(){
    this.http.get(`https://dummyjson.com/products/categories`).subscribe(res =>{
      this.categories = res 
      console.log(this.categories); 
      
    })
  }
  
  ngOnInit(): void {
    this.getAllProduct()
    console.log(this.productGet);
    
    this.getAllCategory()
    
    
  }

}
