import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<any>();

  selectedSize: string[] = [];
  selectedColor!: string[];
  selectedPrice!: string;
  selectedBrand!: string;

  showOptions = false;

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  handleFilter(): void {
    if (this.showOptions) {
      this.filterChange.emit(this.predicate);
    }
  }

  handleReset(): void {
    this.selectedSize = [];
    this.selectedColor = [];
    this.selectedPrice = '';
    this.selectedBrand = '';
    this.handleFilter();
  }

  private predicate = (product: any) => {
    let condition = true;
  
    if (!this.isFalsyValue(this.selectedSize)) {
      const selectedSizes = this.selectedSize.map(size => +size);
      condition = selectedSizes.every(size => product.size.includes(size));
    }
  
    if (!this.isFalsyValue(this.selectedColor)) {
      condition = condition && this.selectedColor.every(color => product.color.includes(color));
    }


    if (!this.isFalsyValue(this.selectedBrand)) {
      condition = condition && this.selectedBrand.includes(product.brand);
    }

    if (!this.isFalsyValue(this.selectedPrice)) {
      const maxPrice = parseFloat(this.selectedPrice);
      condition = condition && (!isNaN(maxPrice) && product.price <= maxPrice);
    }

  
    return condition;
  };
  

  private isFalsyValue(value: any): boolean {
    return [null, undefined, ''].includes(value.toString().trim());
  }
}


//-------------------------------------------------------------------------------------------------------

// private predicate=(product:any)=>product.size.includes(this.selectedSize ? +this.selectedSize: null);



//---------------------------------------------------------------------------------------------------------/ 

// private predicate = (product: any) => {

//   if (this.isfalsyvalue(this.selectedSize)) {
//     // All sizes are selected, return true for all products
//     return true;
//   } else {
//     // Check if the selected size is included in the product's size array
//     return product.size.includes(+this.selectedSize);
//   }
// };


// -----------------------------------------------------------------------------------------------------------