import type { RootState } from "~/store"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, removeAllFromCart } from "~/reducers/cart"
import "~/sass/styles.scss"

import Header from "~/components/header/header"
import Footer from "~/components/footer/footer"
import Item from "~/components/item/item"
import ItemList from "~/components/item/itemList"

function App() {
    const { items, itemCount } = useSelector((state: RootState) => ({
        items: state.cart.items,
        itemCount: state.cart.itemsCount
    }))
    const dispatch = useDispatch()

    return (
        <>
            <Header />
            <div className="page-content">
                <h1 className="title-2">Vite + React</h1>
                <ItemList>
                    {Object.entries(items).map(([id, { count, title }]) => (
                        <li key={id}>
                            <Item
                                id={id}
                                count={count}
                                onDelete={() => dispatch(removeFromCart(id))}
                                onAddToCart={() => dispatch(addToCart(id))}
                                title={title}
                                imageUrl=""
                            />
                        </li>
                    ))}
                </ItemList>
            </div>
            <Footer
                onRemoveAllFromCart={() => dispatch(removeAllFromCart())}
                itemCount={itemCount}
            />
        </>
    )
}

export default App
