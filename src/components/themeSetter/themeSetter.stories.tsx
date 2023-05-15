import type { Meta, StoryObj } from "@storybook/react"
import ThemeSetter from "./themeSetter"

const meta = {
    title: "Page/ThemeSetter",
    component: ThemeSetter,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {},
} satisfies Meta<typeof ThemeSetter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { theme: "dark", changeTheme: () => {} },
    argTypes: {
        theme: {
            options: ["dark", "light"],
            control: { type: "radio" },
        },
    },
}
