import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from './items/items.reducers'
import directoryRecucer from './directory/directory.reducers'
import cartSlice from './cart/cart.slices'

const reducer = {
    products: productsReducer,
    directory:directoryRecucer,
    cart:cartSlice
}

const store = configureStore({
    reducer,
    // eslint-disable-next-line no-undef
    middleware: [logger]
})

export default store