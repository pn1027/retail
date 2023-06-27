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
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  addToCart(item: IProduct): void {
    const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
  }

  removeFromCart(item: IProduct): void {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const cartItem = this.cartItems[index];
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getCartItemQuantity(product: IProduct): number {
    const item = this.cartItems.find((cartItem) => cartItem.id === product.id);
    return item ? item.quantity : 0;
  }
}
