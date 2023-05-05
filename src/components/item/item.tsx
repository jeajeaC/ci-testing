import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import classnames from "classnames"

import Button from "~/components/button/button"

import deleteLogo from "~/assets/delete.svg"
import addToCartLogo from "~/assets/shopping_cart.svg"

interface ItemProps {
    count: number
    beer: {
        id: string
        name: string
        description: string
        imageUrl: string
    }
    onDelete: Function
    onAddToCart: Function
}

export default function Item({
    beer,
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
                onClick={() => onDelete(beer.id)}
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
                <div>
                    <img src={beer.imageUrl} />

                    <p className="item-name">{beer.name}</p>
                    <p className="item-description">{beer.description}</p>
                </div>
                <Button onClick={() => onAddToCart(beer.id)}>
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
