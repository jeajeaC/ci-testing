import type { Meta, StoryObj } from "@storybook/react"
import Footer from "./footer"

const meta = {
    title: "Page/Footer",
    component: Footer,
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <Footer itemCount={args.itemCount} onRemoveAllFromCart={() => {}} />
    ),
    args: {
        itemCount: 0,
    },
}
