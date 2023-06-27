
// export class ProductlayoutComponent implements OnInit {
//   shoes = Products;
//   bestSellers = this.shoes.slice(0, 4);
//   newArrivals = this.shoes.slice(4, 8);

//   ngOnInit() {
//     this.shoes = Products;
//   }
// }

import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenProductViewModalComponent } from './modal/open-product/open-product-view-modal.component';

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
  constructor(private modalService: NgbModal) {}
  
  ngOnInit() {
    this.bestSellers = this.shoes.slice(0, 4);
    this.newArrivals = this.shoes.slice(4, 8);
  }

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

