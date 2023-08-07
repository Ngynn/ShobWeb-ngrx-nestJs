import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemState } from 'src/ngrx/state/item.state';
import * as ItemActions from 'src/ngrx/actions/item.actions';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  itemList$ = this.store.select((state) => state.item.cartList);
  total$ = this.store.select((state) => state.item.total);

  constructor(private store: Store<{item: ItemState}>) { }

  

  removeItemFromCart(item: Item) {
    this.store.dispatch(ItemActions.removeItemFromCart({item}));
    console.log(item);
    
  }

  addItemToStock(item: Item) {
    this.store.dispatch(ItemActions.addItemToStock({item}));
  }

  removeItemFromStock(item: Item) {
    this.store.dispatch(ItemActions.removeItemFromStock({item}));
  }

  clearAllCart() {
    this.store.dispatch(ItemActions.clearAllCart());
  }

}
