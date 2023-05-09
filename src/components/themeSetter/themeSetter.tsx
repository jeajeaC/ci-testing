import lightModeLogo from "~/assets/light-mode.svg"
import darkModeLogo from "~/assets/dark-mode.svg"
import type { Theme } from "~/reducers/theme"

type ThemeProps = {
    theme: Theme
    changeTheme: Function
}

export default function ThemeSetter({ theme, changeTheme }: ThemeProps) {
    const source = theme === "dark" ? lightModeLogo : darkModeLogo
    const changeTo: Theme = theme === "dark" ? "light" : "dark"

    return (
        <button onClick={() => changeTheme(changeTo)} className="theme">
            <img src={source} alt={`change theme to ${changeTo}`} />
        </button>
    )
}
