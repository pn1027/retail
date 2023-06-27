import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
<<<<<<< HEAD
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenProductViewModalComponent } from './modal/open-product/open-product-view-modal.component';
=======
import { CartService } from 'src/app/cart.service';
>>>>>>> 615ccc52254c8d15fc751a0dd4936ab2d3b366c3

@Component({
  selector: 'lib-Productlayout',
  templateUrl: './productlayout.component.html',
  styleUrls: ['./productlayout.component.css']
})
export class ProductlayoutComponent implements OnInit {
  @Input() shoes: IProduct[] =[]; 
  bestSellers: IProduct[] =[];
  newArrivals: IProduct[] =[];

<<<<<<< HEAD
  faInfoCircle = faInfoCircle;
  constructor(private modalService: NgbModal) {}
  
=======
  constructor(private cartService: CartService) { }

>>>>>>> 615ccc52254c8d15fc751a0dd4936ab2d3b366c3
  ngOnInit() {
    this.bestSellers = this.shoes.slice(0, 4);
    this.newArrivals = this.shoes.slice(4, 8);
  }
<<<<<<< HEAD

  openView(id : number){
    this.modalService.open(OpenProductViewModalComponent, { size: 'xl' }).result.then(
			(result) => {
			//	this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
			//	this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);

  }
}
=======
>>>>>>> 615ccc52254c8d15fc751a0dd4936ab2d3b366c3

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
