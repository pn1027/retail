import { Injectable } from '@angular/core';
import { IProduct } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProduct[] = [];

  constructor() {}

  getCartItems(): IProduct[] {
    return this.cartItems;
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }

  addToCart(item: IProduct): void {
    this.cartItems.push(item);
  }

  removeFromCart(item: IProduct): void {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
