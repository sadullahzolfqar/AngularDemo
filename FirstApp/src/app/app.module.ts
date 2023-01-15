import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/products.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations:[AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ProductsModule],
  // providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}