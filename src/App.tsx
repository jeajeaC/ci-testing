import type { RootState } from "~/store"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, removeAllFromCart } from "~/reducers/cart"
import "~/sass/styles.scss"

import Header from "~/components/header/header"
import Footer from "~/components/footer/footer"
import Item from "~/components/item/item"
import ItemList from "~/components/item/itemList"
import { useGetBeersQuery } from "./services/beer"

function App() {
    const { data, error, isLoading } = useGetBeersQuery(1)
    console.log({ data, error, isLoading })
    const { items, itemCount } = useSelector((state: RootState) => ({
        items: state.cart.items,
        itemCount: state.cart.itemsCount
    }))
    const dispatch = useDispatch()

    return (
        <>
            <Header />
            {!isLoading && !error ? (
                <>
                    <div className="page-content">
                        <h1 className="title-2">Vite + React</h1>
                        <ItemList>
                            {data.map((beer) => (
                                <li key={beer.id}>
                                    <Item
                                        count={items[beer.id] || 0}
                                        onDelete={() =>
                                            dispatch(removeFromCart(beer.id))
                                        }
                                        onAddToCart={() =>
                                            dispatch(addToCart(beer.id))
                                        }
                                        beer={beer}
                                    />
                                </li>
                            ))}
                        </ItemList>
                    </div>
                    <Footer
                        onRemoveAllFromCart={() =>
                            dispatch(removeAllFromCart())
                        }
                        itemCount={itemCount}
                    />
                </>
            ) : (
                "Loading..."
            )}
        </>
    )
}

export default App
