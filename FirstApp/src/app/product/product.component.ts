import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {} as Product;
  @Output() productEmitter = new EventEmitter<Product>();

  addToCard() {
    this.productEmitter.emit(this.product);
  }
}
