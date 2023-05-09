import { useCallback, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import classNames from "classnames"

import { addToCart, removeFromCart, removeAllFromCart } from "~/reducers/cart"
import type { RootState } from "~/store"
import Header from "~/components/header/header"
import Footer from "~/components/footer/footer"
import Loading from "~/components/loading/loading"
import Item from "~/components/item/item"
import ItemList from "~/components/item/itemList"
import HeroPicture from "~/components/heroPicture/heroPicture"
import { useGetBeersQuery } from "./services/beer"
import useDetectScrolledToBottom from "./hooks/useDetectScrolledToBottom"

import "~/sass/styles.scss"

function App() {
    const [page, setPage] = useState<number>(1)
    const pageRef = useRef<HTMLDivElement>(null)

    const { data, error, isLoading } = useGetBeersQuery(page)
    const { items, itemCount } = useSelector((state: RootState) => ({
        items: state.cart.items,
        itemCount: state.cart.itemsCount
    }))

    const changePage = useCallback(() => {
        setPage(page + 1)
    }, [page])
    useDetectScrolledToBottom<HTMLDivElement>(changePage, pageRef)
    const dispatch = useDispatch()

    if (error) return null
    return (
        <>
            <Header />
            {isLoading ? (
                <Loading />
            ) : (
                <div
                    className={classNames({
                        "big-wrapper": true,
                        "with-footer": itemCount !== 0
                    })}
                    ref={pageRef}
                >
                    <HeroPicture />

                    <div className="page-content">
                        <ItemList>
                            {data?.map((beer) => (
                                <li key={`${beer.id}-${beer.name}`}>
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
                        <Loading />
                    </div>
                    {itemCount !== 0 && (
                        <Footer
                            onRemoveAllFromCart={() =>
                                dispatch(removeAllFromCart())
                            }
                            itemCount={itemCount}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export default App
