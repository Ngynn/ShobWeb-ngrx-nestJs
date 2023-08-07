import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from 'src/app/services/http.service';
import * as ItemActions from '../actions/item.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ItemEffects {
  constructor(private httpService: HttpService, private actions$: Actions) { }


  getItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.getItem),
      exhaustMap(() =>
        this.httpService.getItem().pipe(
          map((product) => {
            if (product.length > 0) { }
            return ItemActions.getItemSuccess({
              itemList: product,
            });
          }),
          catchError((error) => of(ItemActions.getItemFailure({ error })))
        )
      )
    )
  );

 











}
