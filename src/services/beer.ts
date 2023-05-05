// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const beerApi = createApi({
    reducerPath: "punkapi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/" }),
    endpoints: (builder) => ({
        getBeers: builder.query({
            query: (page: number) => `beers?per_page=10&page=${page}`
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBeersQuery } = beerApi
