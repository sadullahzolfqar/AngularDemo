import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  add(product: Product) {
    this.cart.push(product);
    console.log(this.cart);
  }

  remove(product: Product) {
    this.cart = this.cart.filter(x => x != product);
  }

  getCarts() {
    return this.cart;
  }
}
