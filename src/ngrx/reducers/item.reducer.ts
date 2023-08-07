import { createReducer, on } from "@ngrx/store";
import { ItemState } from "../state/item.state";
import * as ItemActions from "../actions/item.actions";


export const initialState: ItemState = {
    isLoading: false,
    isSuccess: false,
    itemList: [],
    cartList: [],
    error: "",
    total: 0,
};

export const itemReducer = createReducer(
    initialState,
    on(ItemActions.getItem, (state, action) => {
        console.log(action.type);

        let newState = {
            ...state,
            isLoading: true,
            isSuccess: false,
            itemList: [],
            error: "",
        };
        return newState;
    }),
    on(ItemActions.getItemSuccess, (state, action) => {
        console.log(action.type);

        let newState = {
            ...state,
            isLoading: false,
            isSuccess: true,
            itemList: action.itemList,
            error: "",
        };
        return newState;
    }),
    on(ItemActions.getItemFailure, (state, action) => {
        console.log(action.type);

        let newState = {
            ...state,
            isLoading: false,
            isSuccess: false,
            error: action.error,
        };
        return newState;
    }),

    on(ItemActions.addItemToCart, (state, action) => {
        console.log(action.type);
        const cartList = [...state.cartList];
        const index = cartList.findIndex((item) => item.id === action.item.id);
        if(index !== -1) {
            cartList[index] = {
                ...cartList[index],
                stock: cartList[index].stock + 1,
            };
        } else {
            cartList.push({
                ...action.item,
                stock: 1,
            });
        }

        const total = state.total + action.item.price;
        return {
            ...state,
            cartList,
            total,
        }; 
    }),

    on(ItemActions.removeItemFromCart, (state, action) => {
        console.log(action.type);
        let cartList = [...state.cartList];
        let itemRemove = cartList.find((item) => item.id === action.item.id);
        cartList = cartList.filter((item) => item.id !== action.item.id);

        let total = state.total - action.item.price * (itemRemove == undefined ? 0 : itemRemove.quantity);
        return {
            ...state,
            cartList,
            total,
        };
    }),

    on(ItemActions.addItemToStock, (state, action) => {
        console.log(action.type);
        let cartList = [...state.cartList];
        let total =0;
        const index = cartList.findIndex((item) => item.id === action.item.id);
        if(index !== -1) {
            cartList[index] = {
                ...cartList[index],
                stock: cartList[index].stock + 1,
            };
            total = state.total + action.item.price;
        }
        return {
            ...state,
            cartList,
            total,
        };
    }),

    on(ItemActions.removeItemFromStock, (state, action) => {
        console.log(action.type);
        let cartList = [...state.cartList];
        let total =0;
        const index = cartList.findIndex((item) => item.id === action.item.id);
        if(index !== -1) {
            cartList[index] = {
                ...cartList[index],
                stock: cartList[index].stock - 1,
            };
            if(cartList[index].stock === 0) {
                cartList = cartList.filter((item) => item.id !== action.item.id);
            }
            total = state.total - action.item.price;
        }
        return {
            ...state,
            cartList,
            total,
        };
    }
        
    ),

    on(ItemActions.clearAllCart, (state, action) => {
        console.log(action.type);
        return {
            ...state,
            cartList: [],
            total: 0,
        };
    }),




   




)