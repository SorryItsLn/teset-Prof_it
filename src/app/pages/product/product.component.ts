import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/datsInt';
import { Observable } from 'rxjs';
import { test } from '../../models/testData';
import { ProductService } from '../../requests/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  filter = ''
  link = ''
  public product$? : Observable<IProduct[]> 
  categories : any  //изначльно лпнировал привязать интерфейс, не хватило знаний ts
  default_url : string = ""
  constructor(private http: HttpClient, private ProductService : ProductService){
  

  }
  getCategory(item : string){
    this.link = item
    console.log(this.link );
    
  }
  getAllCategory(){
    this.http.get(`https://dummyjson.com/products/categories`).subscribe(res =>{
      this.categories = res 
      console.log(this.categories);
      
      
    })
  }
  
  ngOnInit(): void {
    this.getAllCategory()
    this.product$ =  this.ProductService.getAll()
    this.ProductService.getAll().subscribe(p=>{
      console.log(p);
      
    })
    
  }

}
