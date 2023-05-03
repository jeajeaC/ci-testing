import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import classnames from "classnames"

import Button from "~/components/button/button"

import deleteLogo from "~/assets/delete.svg"
import addToCartLogo from "~/assets/shopping_cart.svg"
import type { Beer } from "~/services/beer"

interface ItemProps {
    count: number
    beer: Beer
    onDelete: Function
    onAddToCart: Function
}

export default function Item({
    beer,
    count,
    onDelete,
    onAddToCart,
}: ItemProps) {
    const [swiped, setSwiped] = useState(false)
    const handlers = useSwipeable({
        onSwipedRight: () => setSwiped(true),
        onSwipedLeft: () => setSwiped(false),
    })
    return (
        <div className="item-wrapper">
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
                    swiped,
                })}
            >
                <div className="text">
                    <p className="item-name">
                        {beer.name}{" "}
                        {count !== 0 && <span>{`(${count} in the cart)`}</span>}
                    </p>
                    <p className="description">{beer.description}</p>
                </div>
                <button
                    onClick={() => onAddToCart(beer.id)}
                    className="add-button"
                >
                    <img
                        src={addToCartLogo}
                        alt="add to cart"
                        className="logo"
                    />
                </button>
            </article>
        </div>
    )
}
