import { Component } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[] = [
    {
      name: 'Wireless Gaming Headset',
      price : 41,
      image: "https://m.media-amazon.com/images/I/71EMuxMps5L._SX522_.jpg"
    },
    {
      name: 'IPhone 14 Pro Max',
      price : 1100,
      image: "https://m.media-amazon.com/images/I/61Vsnjewm7L._AC_SX466_.jpg"
    }
  ];

  cards: Product[] = [];

  addToCard(product: Product) {
    this.cards.push(product);
    console.log(this.cards);
  }

  // isDisabled:boolean = false;
  search:string = '';
  isShowing: boolean = true;

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

  // showProduct() {
  //   this.isDisabled = !this.isDisabled;
  // }

  // handleInput(event: any) {
  //   this.search = event.target.value;
  // }
}
