import { NgModule } from '@angular/core';
import { ProductlayoutComponent } from './productlayout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductlayoutComponent
  ],
  imports: [
    FormsModule, //For Ngfor 
    CommonModule //when library is created 
  ],
  exports: [
    ProductlayoutComponent
  ]
})
export class ProductlayoutModule { }
