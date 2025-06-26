import { baseAPI } from "@services/base-api";
import { Stocks } from "@services/tags";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMyStocks: builder.query({
      query: ({ symbol }) => ({
        url: `query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=demo`,
        method: "GET",
      }),
      providesTags: [Stocks],
    }),
  }),
});

export const { useGetMyStocksQuery } = authAPI;
