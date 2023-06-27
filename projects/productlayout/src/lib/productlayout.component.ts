import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenProductViewModalComponent } from './modal/open-product/open-product-view-modal.component';
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

  faInfoCircle = faInfoCircle;
  constructor(private modalService: NgbModal, private cartService: CartService) {}
  

  ngOnInit() {
    this.bestSellers = this.shoes.slice(0, 4);
    this.newArrivals = this.shoes.slice(4, 8);
  }

  openView(id : number){
    this.modalService.open(OpenProductViewModalComponent, { size: 'xl' }).result.then(
			(result: any) => {
			//	this.closeResult = `Closed with: ${result}`;
			},
			(reason: any) => {
			//	this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);

  }


  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
  removeFromCart(product: IProduct): void {
    this.cartService.removeFromCart(product);
  }
  clearCart(): void {
    this.cartService.clearCart();
  }

  getCartItemQuantity(product: IProduct): number {
    return this.cartService.getCartItemQuantity(product);
  }

  getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  getCartItems(): IProduct[] {
    return this.cartService.getCartItems();
  }

}
