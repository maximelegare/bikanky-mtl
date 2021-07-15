import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";


import logger from "redux-logger";

import productsReducer from './items/items.reducers'
import directoryRecucer from './directory/directory.reducers'
import cartSlice from './cart/cart.slices'
import sliderSlice from "./side-slider/side-slider.slice";
import dropdownSlice from "./dropdown-elements-visibility/dropdown.slice";


const reducers = combineReducers({
    products: productsReducer,
    directory:directoryRecucer,
    cart:cartSlice,
    slider:sliderSlice,
    dropdown:dropdownSlice
})



const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
    reducer:persistedReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    // eslint-disable-next-line no-undef
    middleware: [logger]
})



export default store