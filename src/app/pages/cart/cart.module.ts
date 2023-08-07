import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from 'src/app/pages/cart/cart-routing.module';
import { ShareModule } from 'src/app/shared/share/share.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    ShareModule
  ]
})
export class CartModule { }
