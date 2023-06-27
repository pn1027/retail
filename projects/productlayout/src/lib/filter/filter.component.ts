import { CartService } from 'src/app/cart.service';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'lib-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  selectedSize: string = '';
  selectedColor: string = '';
  selectedPrice: string = '';
  selectedBrand: string = '';

  constructor(private cartService: CartService) {}

  handleFilter() {
    console.log("handleFilter() called");
    this.filteredProducts = this.products.filter((product) => {
      const selectedColorLower = this.selectedColor.toLowerCase();
      const productColorsLower = product.color.map(color => color.toLowerCase());
  
      if (
        (this.selectedSize === '' || product.size.includes(Number(this.selectedSize))) &&
        (this.selectedColor === '' || productColorsLower.includes(selectedColorLower)) &&
        (this.selectedPrice === '' || product.price <= Number(this.selectedPrice)) &&
        (this.selectedBrand === '' || product.brand === this.selectedBrand)
      ) {
        return true;
      }
      return false;
    });
  }
  

  handleReset() {
    this.selectedSize = '';
    this.selectedColor = '';
    this.selectedPrice = '';
    this.selectedBrand = '';
    this.filteredProducts = [];
  }
}
