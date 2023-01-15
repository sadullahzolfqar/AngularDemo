import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/products.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations:[AppComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule, AuthModule],
  // providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}