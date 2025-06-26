"use client";

import { clearWatchlist, removeFromWatchlistBySymbol } from "@root/store/watchlistSlice/watchlistSlice";
import type { RootState } from "@store";
import { useDispatch, useSelector } from "react-redux";

function WatchList() {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);

  const handleClear = () => {
    dispatch(clearWatchlist());
  };

  const handleRemove = (symbol: string) => {
    dispatch(removeFromWatchlistBySymbol(symbol));
  };

  return (
    <div className="border rounded-md p-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Watchlist</h3>
        {watchlist.length > 0 && (
          <button
            onClick={handleClear}
            className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="text-sm space-y-2">
        {watchlist.length === 0 ? (
          <p className="text-gray-400">No stocks in your watchlist.</p>
        ) : (
          watchlist.map((item: any) => (
            <div
              key={item.symbol}
              className="flex justify-between items-center border-b pb-1"
            >
              <div>
                <span className="font-medium">{item.symbol ?? "-"}</span>{" "}
                <span className="text-gray-600">{item.name ?? "-"}</span>
              </div>
              <button
                onClick={() => handleRemove(item.symbol)}
                className="text-xs text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WatchList;
