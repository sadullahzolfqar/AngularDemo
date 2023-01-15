import { Component, OnInit } from '@angular/core';
import { Product } from '../types/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private  productsService: ProductsService) {
    // this.products = productsService.fetchProducts();
  }

  ngOnInit(): void {
    this.products = this.productsService.fetchProducts();
  }

  products:Product[] = [];

  // cards: Product[] = [];

  search:string = '';
  isShowing: boolean = true;

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

  // addToCard(product: Product) {
  //   this.cards.push(product);
  // }
  // showProduct() {
  //   this.isDisabled = !this.isDisabled;
  // }

  // handleInput(event: any) {
  //   this.search = event.target.value;
  // }
}
