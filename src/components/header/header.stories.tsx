import type { Meta, StoryObj } from "@storybook/react"
import Header from "./header"

const meta = {
    title: "Page/Header",
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {}
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
