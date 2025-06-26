import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"


type StockState = {
  selectedSymbol: string ;
};

const initialState: StockState = {
  selectedSymbol: "",
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setSelectedSymbol: (state, action: PayloadAction<string>) => {
      state.selectedSymbol = action.payload;
    },
    clearSelectedSymbol: (state) => {
      state.selectedSymbol = "";
    },
  },
});

export const { setSelectedSymbol, clearSelectedSymbol } = stockSlice.actions;
export const stockSliceReducer = stockSlice.reducer;
