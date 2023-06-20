import { Component } from '@angular/core';
import { Products } from './mock-products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'retail';
  products = Products;
}
