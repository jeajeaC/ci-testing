import type { Meta, StoryObj } from "@storybook/react"
import Footer from "./footer"

import deleteLogo from "~/assets/delete.svg"

const meta = {
    title: "Page/Footer",
    component: Footer
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <Footer itemCount={args.itemCount} onRemoveAllFromCart={() => {}}>
            <img src={deleteLogo} className="logo" />
        </Footer>
    ),
    args: {
        itemCount: 0
    }
}
