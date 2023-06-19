import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent
  ],
  imports: [
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
