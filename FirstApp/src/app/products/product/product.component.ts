import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) {
    // console.log({ constructor: "contructor"});
  }

  isInCart: boolean = false;

  // interval: any = null;

  ngOnInit(): void {
    //console.log({ onInit: "onInit"});
    // this.interval = setInterval(() => {
    //   console.log("Hello");
    // }, 1000)
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
    //console.log({ destroy: "OnDestroy"});  
  }

  @Input() product: Product = {} as Product;
  // @Output() productEmitter = new EventEmitter<Product>();

  addToCard() {
    this.isInCart = true;
    this.cartService.add(this.product);
    // this.productEmitter.emit(this.product);
  }

  removeFromCard() {
    this.isInCart = false;
    this.cartService.remove(this.product);
  }
}
