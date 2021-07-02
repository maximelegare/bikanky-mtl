import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from './items/items.reducers'
import directoryRecucer from './directory/directory.reducers'


const reducer = {
    products: productsReducer,
    directory:directoryRecucer
}

const store = configureStore({
    reducer,
    // eslint-disable-next-line no-undef
    middleware: [logger]
})

export default store