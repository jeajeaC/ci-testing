import type { RootState } from "~/store"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "~/reducers/cart"
import "~/sass/styles.scss"

import Header from "~/components/header/header"

function App() {
    const count = useSelector((state: RootState) => state.cart.itemsCount)
    const dispatch = useDispatch()

    return (
        <>
            <Header />
            <div className="page-content">
                <h1 className="title-2">Vite + React</h1>
                <div className="card">
                    <button onClick={() => dispatch(addToCart("count"))}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </>
    )
}

export default App
