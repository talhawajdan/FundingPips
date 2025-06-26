"use client";
import IsLoading from "@components/isLoading";
import PriceChart from "@components/priceChart";
import StockCard from "@components/stockCard";
import WatchList from "@components/watchlist";
import { useGetMyStocksQuery } from "@services/home/homeMainApi";
import { useSelector } from "react-redux";

function Home() {
  const selectedSymbol = useSelector(
    (state: any) => state.stock.selectedSymbol
  );
  const { data, isLoading, isFetching, isError } = useGetMyStocksQuery({
    symbol: selectedSymbol,
  });

  if (isLoading || isFetching) {
    return <IsLoading />;
  }
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-6 border border-red-300 bg-red-50 rounded-md text-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M12 6a9 9 0 100 18 9 9 0 000-18z"
          />
        </svg>
        <p className="text-sm">Unable to fetch stock data.</p>
      </div>
    );
  }
  console.log(data["Monthly Time Series"] , "data");
  return (
    <>
      <div className="grid grid-cols-1 mt-3">
        <WatchList />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 mt-3">
        {data["Meta Data"] && <StockCard stockData={data["Meta Data"]} />}
        {data["Monthly Time Series"] && (
          <PriceChart apiData={data["Monthly Time Series"]} />
        )}
      </div>
    </>
  );
}

export default Home;
