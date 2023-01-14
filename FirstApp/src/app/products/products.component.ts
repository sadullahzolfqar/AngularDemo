import { Component } from '@angular/core';

interface Product {
  name: string;
  price: Number,
  image: string
}

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
