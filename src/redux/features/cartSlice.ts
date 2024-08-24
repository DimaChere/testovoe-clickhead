import { CartState, Product } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            state.products.push(action.payload);
        },
        removeFromCart(state, action: PayloadAction<number>) {
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].id === action.payload) {
                    state.products.splice(i, 1);
                    break;
                }
            }
        },
        clearCart(state) {
            state.products = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
