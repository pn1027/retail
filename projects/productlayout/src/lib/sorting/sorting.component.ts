import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent {
  @Input() shoes: any[] = []; // Receive the shoes data from the ProductlayoutComponent
  @Output() sortChange = new EventEmitter<string>();

  selectedSortOption: string = 'default';

  showOptions = false;

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  handleSort(): void {
    switch (this.selectedSortOption) {
      case 'lowToHigh':
        this.sortChange.emit('lowToHigh');
        break;
      case 'highToLow':
        this.sortChange.emit('highToLow');
        break;
      default:
        this.sortChange.emit('default');
        break;
    }
  }

  getSortingWord(): string {
    switch (this.selectedSortOption) {
      case 'lowToHigh':
        return 'Low to High';
      case 'highToLow':
        return 'High to Low';
      default:
        return '';
    }
  }
}

// -----------------------------------------------------------------------------------------------------
// handleSort(): void {
  //   this.sortChange.emit(this.selectedSortOption);
  // }
