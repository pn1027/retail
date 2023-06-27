import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'lib-Cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IProduct[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: IProduct): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
  }

  getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  getCartItems(): IProduct[] {
    return this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
