import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CatsComponent } from './pages/cats/cats.component';

const routes: Routes = [

  {
    path: "", 
    component: HomeComponent, 
    title: "Home"
  }, 
  {
    path: "product",
    component: ProductComponent,
    title: "Product"
  },
  {
    path: "cats",
    component: CatsComponent,
    title: "Cats"
  },
  {
    path: "**",
    component: HomeComponent, 
    redirectTo: ''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
