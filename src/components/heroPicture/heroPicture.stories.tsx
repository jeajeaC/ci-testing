import type { Meta, StoryObj } from "@storybook/react"
import Hero from "./heroPicture"

const meta = {
    title: "Page/Hero",
    component: Hero,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {},
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
