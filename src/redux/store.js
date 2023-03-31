import { combineReducers, createStore } from "redux";
import { ItemsReducer } from "./itemsReducer";
import { OrdrersReducer } from "./ordersReducer.js";

export let reducers = combineReducers({
    items: ItemsReducer,
    orders: OrdrersReducer,
});
;

export let store = createStore(reducers);
