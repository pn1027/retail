import { Component } from '@angular/core';
import { Products } from './mock-products';
import { CartService } from './cart.service';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'retail';
  products = Products;

  constructor(private cartService: CartService) { }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  getCartItems(): any[] {
    return this.cartService.getCartItems();
  }

  getCartItemQuantity(product: IProduct): number {
    return this.cartService.getCartItemQuantity(product);
  }
 
}
