import { NgModule } from '@angular/core';
import { ProductlayoutComponent } from './productlayout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OpenProductViewModalComponent } from './modal/open-product/open-product-view-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProductlayoutComponent,
    OpenProductViewModalComponent
  ],
  imports: [
    FormsModule, //For Ngfor 
    CommonModule,
    FontAwesomeModule, //when library is created 
    NgbModule,
    NgbCarouselModule
  ],
  exports: [
    ProductlayoutComponent
  ]
})
export class ProductlayoutModule { }
