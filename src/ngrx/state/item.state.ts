import { Item } from "src/app/models/item.model";

export interface ItemState {
  isLoading: boolean;
  isSuccess: boolean;
  itemList: Item[];
  cartList: Item[];
  error: string;
  total: number;
}
