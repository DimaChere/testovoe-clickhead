import { Money, Product } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Money = {
    coins: 200,
};

const moneySlice = createSlice({
    name: "money",
    initialState,
    reducers: {
        addCoins(state, action: PayloadAction<number>) {
            state.coins = +(state.coins + action.payload).toFixed(2);
        },
        removeCoins(state, action: PayloadAction<number>) {
            state.coins = +(state.coins - action.payload).toFixed(2);
        },
    },
});

export const { addCoins, removeCoins } = moneySlice.actions;
export default moneySlice.reducer;
