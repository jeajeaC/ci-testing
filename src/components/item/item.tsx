import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import classnames from "classnames"

import Button from "~/components/button/button"

import deleteLogo from "~/assets/delete.svg"
import addToCartLogo from "~/assets/shopping_cart.svg"

interface ItemProps {
    id: string
    title: string
    imageUrl: string
    count: number
    onDelete: Function
    onAddToCart: Function
}

export default function Item({
    id,
    title,
    imageUrl,
    count,
    onDelete,
    onAddToCart
}: ItemProps) {
    const [swiped, setSwiped] = useState(false)
    const handlers = useSwipeable({
        onSwipedRight: () => setSwiped(true),
        onSwipedLeft: () => setSwiped(false)
    })
    return (
        <div className="item">
            <Button
                onClick={() => onDelete(id)}
                disabled={count === 0}
                classes={{ "item-delete-button": true, danger: true }}
            >
                <img src={deleteLogo} alt="delete" className="logo" />
            </Button>
            <article
                {...handlers}
                className={classnames({
                    "item-article": true,
                    swiped
                })}
            >
                <img src={imageUrl} />
                <p>{title}</p>
                <Button onClick={() => onAddToCart(id)}>
                    <img
                        src={addToCartLogo}
                        alt="add to cart"
                        className="logo"
                    />
                </Button>
            </article>
        </div>
    )
}
