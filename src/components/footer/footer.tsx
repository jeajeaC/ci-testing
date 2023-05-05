import Button from "~/components/button/button"
import deleteForeverLogo from "~/assets/delete_forever.svg"
import {} from "~/reducers/cart"
import { MouseEventHandler } from "react"

interface FooterProps {
    itemCount: number
    onRemoveAllFromCart: MouseEventHandler
}

export default function Footer({
    itemCount,
    onRemoveAllFromCart
}: FooterProps) {
    return (
        <footer className="footer">
            {itemCount} items in your basket
            <Button onClick={onRemoveAllFromCart} disabled={itemCount === 0}>
                <img
                    src={deleteForeverLogo}
                    alt="delete forever"
                    className="logo"
                />
            </Button>
        </footer>
    )
}
