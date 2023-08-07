import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as ItemActions from 'src/ngrx/actions/item.actions';
import { ItemState } from 'src/ngrx/state/item.state';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/models/item.model';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  itemList: Item[] = [];

  itemList$: Observable<Item[]> = this.store.select(
    'item',
    'itemList'
  );
  
  constructor(private store: Store<{item: ItemState}>, private router: Router, private httpService: HttpService) {
    this.itemList$.subscribe((itemList) => {
      if (itemList.length > 0) {
        console.log(itemList);

        this.itemList = itemList;
      }

    });
  }

  getItems() {
    this.store.dispatch(ItemActions.getItem());
  }
  navigatio (path: string) {
    this.router.navigate(["path"]);
  }
}
