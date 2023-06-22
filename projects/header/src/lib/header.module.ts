import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
