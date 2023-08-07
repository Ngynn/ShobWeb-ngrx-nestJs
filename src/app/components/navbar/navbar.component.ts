import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as ItemActions from 'src/ngrx/actions/item.actions';
import { ItemState } from 'src/ngrx/state/item.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private store: Store<{item: ItemState}>, private router: Router) {}

  getItems() {
    this.store.dispatch(ItemActions.getItem());
  }
  navigatio (path: string) {
    this.router.navigate([path]);
  }
}
