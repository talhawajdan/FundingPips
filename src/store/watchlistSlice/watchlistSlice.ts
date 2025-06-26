import { createSlice,  } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit"

type Stock = {
  symbol: string;
  name: string;
};

interface WatchlistState {
  items: Stock[];
}

const initialState: WatchlistState = {
  items: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Stock>) => {
      const exists = state.items.find(item => item.symbol === action.payload.symbol);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.symbol !== action.payload);
    },
    clearWatchlist: (state) => {
      state.items = [];
    },
    removeFromWatchlistBySymbol(state, action: PayloadAction<string>) {
  state.items = state.items.filter(item => item.symbol !== action.payload);
}
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  clearWatchlist,
removeFromWatchlistBySymbol
} = watchlistSlice.actions;

export const watchlistReducer =watchlistSlice.reducer
