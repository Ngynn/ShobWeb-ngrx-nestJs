import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/models/item.model';

export const getItem = createAction('[Item] Get Item');
export const getItemSuccess = createAction(
  '[Item] Get Item Success',
  props<{ itemList: Item[] }>()
);
export const getItemFailure = createAction(
  '[Item] Get Item Failure',
  props<{ error: any }>()
);

export const addItemToCart = createAction('[Item] Add Item', props<{ item: Item }>());
// export const addItemToCartSuccess = createAction('[Item] Add Item Success', props<{ item: Item }>());
// export const addItemToCartFailure = createAction('[Item] Add Item Failure', props<{ error: any }>());


export const removeItemFromCart = createAction('[Item] Remove Item', props<{ item: Item }>());
// export const removeItemFromCartSuccess = createAction('[Item] Remove Item Success', props<{ item: Item }>());
// export const removeItemFromCartFailure = createAction('[Item] Remove Item Failure', props<{ error: any }>());


export const addItemToStock = createAction('[Item] Add Item To Stock', props<{ item: Item }>());
// export const addItemToStockSuccess = createAction('[Item] Add Item To Stock Success', props<{ item: Item }>());
// export const addItemToStockFailure = createAction('[Item] Add Item To Stock Failure', props<{ error: any }>());

export const removeItemFromStock = createAction('[Item] Remove Item From Stock', props<{ item: Item }>());
// export const removeItemFromStockSuccess = createAction('[Item] Remove Item From Stock Success', props<{ item: Item }>());
// export const removeItemFromStockFailure = createAction('[Item] Remove Item From Stock Failure', props<{ error: any }>());


export const clearAllCart = createAction('[Item] Clear All Cart');