import type { Meta, StoryObj } from "@storybook/react"
import Button from "./button"

import deleteLogo from "~/assets/delete.svg"

const meta = {
    title: "Page/Button",
    component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <Button danger={args.danger}>
            <img src={deleteLogo} className="logo" />
        </Button>
    ),
    args: {
        danger: false
    }
}
