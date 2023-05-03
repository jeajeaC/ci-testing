import type { Preview } from "@storybook/react"
import "../src/sass/styles.scss"

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: "twitter",
            list: [
                { name: "twitter", class: "theme-twt", color: "#00aced" },
                { name: "facebook", class: "theme-fb", color: "#3b5998" },
            ],
        },
    },
}

export default preview
