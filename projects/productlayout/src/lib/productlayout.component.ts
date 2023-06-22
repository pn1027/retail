import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'lib-Productlayout',
  templateUrl: './productlayout.component.html',
  styleUrls: ['./productlayout.component.css']
})
export class ProductlayoutComponent implements OnInit {
  @Input() shoes: IProduct[] =[]; 
  bestSellers: IProduct[] =[];
  newArrivals: IProduct[] =[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.bestSellers = this.shoes.slice(0, 4);
    this.newArrivals = this.shoes.slice(4, 8);
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: IProduct): void {
    this.cartService.removeFromCart(product);
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
