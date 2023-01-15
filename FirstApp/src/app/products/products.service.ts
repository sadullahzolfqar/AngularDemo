import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  constructor() { }

  fetchProducts() {
    return [
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
  }
}
