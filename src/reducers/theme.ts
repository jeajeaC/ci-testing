import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type Theme = "dark" | "light"

type ThemeState = {
    theme: Theme
}

const getTheme = (): ThemeState => {
    const theme = `${window?.localStorage?.getItem("theme")}`
    if (theme === "dark" || theme === "light") return { theme }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) return { theme: "dark" }

    return { theme: "light" }
}

const initialState = getTheme()

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
            window?.localStorage?.setItem("theme", action.payload)
        },
    },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
