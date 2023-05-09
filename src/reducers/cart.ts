import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CartItemsState {
    itemsCount: number
    items: {
        [key: string]: number
    }
}
const initialState: CartItemsState = {
    itemsCount: 0,
    items: {}
}

const cartSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<number>) => {
            if (state.items[action.payload] !== undefined) {
                state.items[action.payload] += 1
            } else {
                state.items[action.payload] = 1
            }
            state.itemsCount += 1
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            if (state.items[action.payload] !== undefined) {
                if (state.items[action.payload] === 1) {
                    delete state.items[action.payload]
                } else {
                    state.items[action.payload] -= 1
                }
                state.itemsCount -= 1
            } else delete state.items[action.payload]
        },
        removeAllFromCart: (state) => {
            state.itemsCount = 0
            state.items = {}
        }
    }
})

export const { addToCart, removeFromCart, removeAllFromCart } =
    cartSlice.actions

export default cartSlice.reducer
