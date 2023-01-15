import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  providers: [ProductsService],
  imports: [CommonModule],
  exports: [ProductsComponent]
})
export class ProductsModule { }
