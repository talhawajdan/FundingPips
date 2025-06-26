"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "@root/store/watchlistSlice/watchlistSlice";
import type { RootState } from "@store";

function StockCard(props: any) {
  const { stockData } = props;
  const dispatch = useDispatch();

  const symbol = stockData?.["2. Symbol"] ?? "";
  const name = "Company Name"; // Replace dynamically if possible

  const watchlist = useSelector((state: RootState) => state.watchlist.items);
  const isInWatchlist = watchlist.some((item: any) => item.symbol === symbol);

  const handleToggle = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(symbol));
    } else {
      dispatch(addToWatchlist({ symbol, name }));
    }
  };

  return (
    <div className="border rounded-md p-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Stock Data</h3>
        <button
          onClick={handleToggle}
          className={`px-3 py-1 text-sm rounded transition ${
            isInWatchlist
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
      <div className="space-y-2 text-sm">
        {Object.entries(stockData).map(([key, value]: any) => (
          <div className="flex justify-between" key={key}>
            <span className="text-gray-500">{key ?? "-"}</span>
            <span>{value ?? "-"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockCard;
