import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "~/reducers/cart"
import themeSlice from "~/reducers/theme"
import { beerApi } from "./services/beer"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        theme: themeSlice,
        [beerApi.reducerPath]: beerApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(beerApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
