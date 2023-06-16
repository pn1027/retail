import { Component } from '@angular/core';
import { Products, newProducts } from '../mock-products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  shoes = Products ;
  newshoes = newProducts;
}
