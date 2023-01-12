import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations:[AppComponent, ProductsComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}