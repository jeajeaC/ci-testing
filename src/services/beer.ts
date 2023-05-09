// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type Beer = {
    abv: number
    attenuation_level: number
    boil_volume: { value: number; unit: string }
    brewers_tips: string
    contributed_by: string
    description: string
    ebc: number
    first_brewed: string
    food_pairing: string[]
    ibu: number
    id: number
    image_url: string
    ingredients: {
        [key: string]: [
            {
                name: string
                amount: {
                    value: number
                    unit: string
                }
            }
        ]
    }
    method: {
        [key: string]: [
            {
                temp: {
                    value: number
                    unit: string
                }
                duration: number
            }
        ]
    }
    name: string
    ph: number
    srm: number
    tagline: string
    target_fg: number
    target_og: number
    volume: { value: number; unit: string }
}

// Define a service using a base URL and expected endpoints
export const beerApi = createApi({
    reducerPath: "movies",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.punkapi.com/v2/",
        fetchFn: (input, init) => {
            return new Promise((resolve) => setTimeout(resolve, 2500)).then(
                () => fetch(input, init)
            )
        }
    }),
    endpoints: (builder) => ({
        getBeers: builder.query<Beer[], number>({
            query: (page) => `beers?page=${page}&per_page=5`,
            // Only have one cache entry because the arg always maps to one string
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            }
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBeersQuery } = beerApi
