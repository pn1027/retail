
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

@Component({
  selector: 'lib-Productlayout',
  templateUrl: './productlayout.component.html',
  styleUrls: ['./productlayout.component.css']
})
export class ProductlayoutComponent implements OnInit {
  @Input() shoes: IProduct[] =[]; 
  bestSellers: IProduct[] =[];
  newArrivals: IProduct[] =[];

  ngOnInit() {
    this.bestSellers = this.shoes.slice(0, 4);
    this.newArrivals = this.shoes.slice(4, 8);
  }
}

