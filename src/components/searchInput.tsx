"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearSelectedSymbol, setSelectedSymbol } from "@root/store/stock/stockSlice";

export const mockStocks = [
  { symbol: "IBM", name: "International Business Machines Corporation" },
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "AMZN", name: "Amazon.com, Inc." },
  { symbol: "TSLA", name: "Tesla, Inc." },
  { symbol: "NVDA", name: "NVIDIA Corporation" },
  { symbol: "META", name: "Meta Platforms, Inc." },
  { symbol: "NFLX", name: "Netflix, Inc." },
  { symbol: "INTC", name: "Intel Corporation" },
  { symbol: "BABA", name: "Alibaba Group Holding Limited" },
  { symbol: "ORCL", name: "Oracle Corporation" },
  { symbol: "PYPL", name: "PayPal Holdings, Inc." },
  { symbol: "ADBE", name: "Adobe Inc." },
  { symbol: "CRM", name: "Salesforce, Inc." },
  { symbol: "UBER", name: "Uber Technologies, Inc." },
  { symbol: "LYFT", name: "Lyft, Inc." },
  { symbol: "SHOP", name: "Shopify Inc." },
  { symbol: "SQ", name: "Block, Inc." },
  { symbol: "AMD", name: "Advanced Micro Devices, Inc." }
];

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState<typeof mockStocks>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFiltered(
      value.length > 0
        ? mockStocks.filter((stock) =>
            `${stock.symbol} ${stock.name}`
              .toLowerCase()
              .includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleClear = () => {
    setQuery("");
    setFiltered([]);
    dispatch(clearSelectedSymbol());
  };

  const handleSelect = (stock: { symbol: string; name: string }) => {
    setQuery(stock.symbol);
    setFiltered([]);
    dispatch(setSelectedSymbol(stock.symbol));
    // You can trigger an action here
  };

  return (
    <div className="relative w-full max-w-md">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <Search className="w-5 h-5" />
      </span>

      <input
        type="text"
        placeholder="Search for a stock..."
        value={query}
        onChange={handleChange}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {query && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={handleClear}
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {filtered.length > 0 && (
        <ul className="absolute z-10 w-full bg-white shadow-md border border-t-0 border-gray-300 rounded-b-md max-h-60 overflow-y-auto">
          {filtered.map((stock) => (
            <li
              key={stock.symbol}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(stock)}
            >
              <span className="font-medium">{stock.symbol}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
