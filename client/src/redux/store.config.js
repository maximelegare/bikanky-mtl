import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";


import logger from "redux-logger";

// import productsReducer from './items/items.reducers'
import directoryRecucer from './directory/directory.reducers'
import cartSlice from './cart/cart.slices'
import sliderSlice from "./side-slider/side-slider.slice";
import dropdownSlice from "./dropdown-elements-visibility/dropdown.slice";
import userSlice from "./user/user.slice";
import itemsSlice from "./items/items.slice";
import shippingSlice from "./shipping/shipping.slice";
// all reducers
const reducers = combineReducers({
    items: itemsSlice,
    directory:directoryRecucer,
    cart:cartSlice,
    slider:sliderSlice,
    dropdown:dropdownSlice,
    user:userSlice,
    shipping:shippingSlice
})


// eslint-disable-next-line no-undef
const devMode = process.env.NODE_ENV === 'development'



// redux persist configurations
const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

// persist reducers => only the ones in "whitelist"
const persistedReducer = persistReducer(persistConfig, reducers)







// middleWare
const middleware = [thunk]

// add logger to middleware when NODE_ENV = dev
if(devMode){
    middleware.push(logger)
}



// configure redux 
export const store = configureStore({
    reducer:persistedReducer, 
    // eslint-disable-next-line no-undef
    devTools: devMode,
    middleware 
})






export default store