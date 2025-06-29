// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Store + configuration
import { TAGS } from "./tags";
import type { RootState } from "@store";
import { BASE_URL } from "@root/config";


// Create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // If we have a token in the store, then use that for authenticated requests
    const token = (getState() as RootState).auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
