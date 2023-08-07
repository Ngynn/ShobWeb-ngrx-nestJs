import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/services/http.service';
import { ItemState } from 'src/ngrx/state/item.state';
import { Router } from '@angular/router';
import { ItemEffects } from 'src/ngrx/effects/item.effects';
import * as ItemActions from 'src/ngrx/actions/item.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  itemList: Item[] = [];

  itemList$: Observable<Item[]> = this.store.select(
    'item',
    'itemList'
  );

  constructor(
    private httpService: HttpService,
    private store: Store<{ item: ItemState }>

  ) {
    this.itemList$.subscribe((itemList) => {
      if (itemList.length > 0) {
        console.log(itemList);

        this.itemList = itemList;
      }
      
    });

    this.store.dispatch(ItemActions.getItem());
    console.log(this.itemList);
  }

  addItemToCart(item: Item) {
    this.itemList = this.itemList.map((item) => {
      if(item.id === item.id) {
        return {
          ...item,
          stock: item.stock + 1,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    this.store.dispatch(ItemActions.addItemToCart({ item }));
    console.log(item);
  }
}
