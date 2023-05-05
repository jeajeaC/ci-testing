import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Item {
    count: number
    title: string
    imageUrl?: string
}

interface CartItemsState {
    itemsCount: number
    items: {
        [key: string]: Item
    }
}

const items = {
    caca: {
        count: 0,
        title: "Bonjour c'est le caca",
        imageUrl: ""
    },
    pipi: {
        count: 0,
        title: "Bonjour c'est le pipi",
        imageUrl: ""
    },
    prout: {
        count: 0,
        title: "Bonjour c'est le prout",
        imageUrl: ""
    },
    banane: {
        count: 0,
        title: "Bonjour c'est le banane",
        imageUrl: ""
    }
}

const initialState: CartItemsState = {
    itemsCount: 0,
    items
}

const cartSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            if (state.items[action.payload] !== undefined) {
                state.items[action.payload].count += 1
                state.itemsCount += 1
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            if (state.items[action.payload] !== undefined) {
                if (state.items[action.payload].count >= 1) {
                    state.items[action.payload].count -= 1
                    state.itemsCount -= 1
                }
            }
        },
        removeAllFromCart: (state) => {
            state.itemsCount = 0
            state.items = items
        }
    }
})

export const { addToCart, removeFromCart, removeAllFromCart } =
    cartSlice.actions

export default cartSlice.reducer
