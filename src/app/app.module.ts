import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CatsComponent } from './pages/cats/cats.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './requests/services/product.service';
import { FilterProductsPipe } from './pipes/filter-products.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CatsComponent,
    HeaderComponent,
    FilterProductsPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(), 
    ProductService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
