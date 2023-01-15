import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/products.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations:[AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule, ProductsModule],
  // providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}