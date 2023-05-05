import type { Meta, StoryObj } from "@storybook/react"
import Item from "./item"

const meta = {
    title: "Page/Item",
    component: Item,
    parameters: {
        backgrounds: {
            values: [
                { name: "red", value: "#f00" },
                { name: "green", value: "#0f0" },
                { name: "blue", value: "#00f" }
            ]
        }
    }
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: "cafe",
        title: "Café",
        imageUrl: "",
        count: 3,
        onDelete: () => {},
        onAddToCart: () => {}
    }
}
