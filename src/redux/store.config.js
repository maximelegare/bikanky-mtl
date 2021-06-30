import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from './products/products.reducers'

const reducer = {
    products: productsReducer
}

const store = configureStore({
    reducer,
    // eslint-disable-next-line no-undef
    middleware: [logger]
})

export default store