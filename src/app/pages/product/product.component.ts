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
  filter : string = ""; // содержимое инпута фильтрации
  link: string = ''; // содержимое кнопки фильтрации по категории
  products: any = []; // все продукты
  categories: any; // все категории
  pagination: number[] = []; // элементы массива пагинации
  pagination_caunt: number = 1; // текущие массив товаров пагинации

  constructor(
    private http: HttpClient,
    private ProductService: ProductService
  ) {
    

  }
  
// получение нажатой катгории

  getCategory(item: string) {
    this.link = item;
  }
// получение товаров по категории

  getProductByCategeory(category: string) {
    this.http
      .get(`https://dummyjson.com/products/category/${category}`)
      .subscribe((res: any) => {
        this.products = res;
      });
  }

// получение всех товаров

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


// получение всех категорий
  getAllCategory() {
    this.http
      .get(`https://dummyjson.com/products/categories`).pipe(
      )
      .subscribe((res) => {
        this.categories = res;
        (this.paginationCreate(this.products.limit, this.products.total))
      });
  }


// функция создание элементов пагинцаии
  paginationCreate(limit: number, total: number) {
    for (let i: number = 1; i * limit < total; i++) {
      this.pagination.push(i);
    }
  }


// функция паггинации слдеующий разряд 
  next(count: number) {
    // проверка с последний элемнта перебрасывается на 1
    if ((count > this.pagination.length-1)) {
      this.pagination_caunt = this.pagination[0];
      this.getAllProduct(this.pagination_caunt);
    } else {
      this.getAllProduct(this.pagination_caunt + 1);
    }
  }


// функция паггинации предыдущий разряд 
  prev(count: number) {
    // проверка с 1 элемнта перебрасывается на последний
    if ((count < this.pagination[0]+1)) {
      this.pagination_caunt = this.pagination[this.pagination.length - 1];
      this.getAllProduct(this.pagination_caunt);
    } else {

      this.getAllProduct(this.pagination_caunt - 1);
    }
  }
  ngOnInit(): void {
    this.getAllProduct(this.pagination_caunt);
    this.getAllCategory();

  }
}
