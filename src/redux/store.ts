import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import moneySlice from "./features/moneySlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        money: moneySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
