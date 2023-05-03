import type { Meta, StoryObj } from "@storybook/react"
import Loading from "./loading"

const meta = {
    title: "Page/Loading",
    component: Loading,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {},
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
