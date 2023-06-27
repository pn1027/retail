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
    this.updateCartItems();
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    this.updateCartItems();
  }

  removeFromCart(product: IProduct): void {
    this.cartService.removeFromCart(product);
    this.updateCartItems();
  }

  updateCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  getCartItems(): IProduct[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.updateCartItems();
  }

  isCartDropdownOpen: boolean = false;

  toggleCartDropdown() {
    this.isCartDropdownOpen = !this.isCartDropdownOpen;
  }
}
