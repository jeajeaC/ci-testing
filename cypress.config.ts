import { defineConfig } from "cypress"

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    viewportHeight: 851,
    viewportWidth: 393,
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
})
