import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/datsInt';
import { Observable } from 'rxjs';
import { test } from '../../models/testData';
import { ProductService } from '../../requests/services/product.service';
import { log } from 'console';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  filter : string = ""
  link: string = '';
  products?: any = [];
  categories: any;
  pagination: number[] = [];
  pagination_caunt: number = 1;

  constructor(
    private http: HttpClient,
    private ProductService: ProductService
  ) {
    

  }
  getCategory(item: string) {
    this.link = item;
  }
  getProductByCategeory(category: string) {
    this.http
      .get(`https://dummyjson.com/products/category/${category}`)
      .subscribe((res: any) => {
        this.products = res;
      });
  }

  getAllProduct(pagination_caunt: number) {
    this.pagination_caunt = pagination_caunt;
    this.http
      .get(
        `https://dummyjson.com/products?limit=9&skip=${pagination_caunt * 9}`,
        {}
      )
      .subscribe((res) => {
        this.products = res;
      });
  }

  getAllCategory() {
    this.http
      .get(`https://dummyjson.com/products/categories`)
      .subscribe((res) => {
        this.categories = res;
      });
  }
  paginationCreate(limit: number, total: number) {
    for (let i: number = 1; i * limit < total; i++) {
      this.pagination.push(i);
    }
  }
  next(count: number) {
    if ((count > this.pagination.length-1)) {
      this.pagination_caunt = this.pagination[0];
      this.getAllProduct(this.pagination_caunt);
      console.log(this.pagination_caunt);
    } else {
      this.getAllProduct(this.pagination_caunt + 1);
    }
  }
  prev(count: number) {
    if ((count < this.pagination[0]+1)) {
      this.pagination_caunt = this.pagination[this.pagination.length - 1];
      console.log(this.pagination_caunt, 'условие');

      this.getAllProduct(this.pagination_caunt);
    } else {
      console.log(this.pagination_caunt);

      this.getAllProduct(this.pagination_caunt - 1);
    }
  }
  ngOnInit(): void {
    this.getAllProduct(this.pagination_caunt);
    this.getAllCategory();
    this.paginationCreate(this.products.limit, this.products.total);

    console.log(this.filter);
  }
}
