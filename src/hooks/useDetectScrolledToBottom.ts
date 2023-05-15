import { RefObject } from "react"
import useEventListener from "./useEventListener"

function useDetectScrolledToBottom<T extends HTMLElement>(
    onScrollToBottom: Function,
    elementRef: RefObject<T>,
) {
    const handlescrollToBottom = () => {
        if (!(elementRef && elementRef.current)) return

        if (
            elementRef.current.scrollTop + 1 >
            elementRef.current.scrollHeight - elementRef.current.clientHeight
        ) {
            onScrollToBottom()
        }
    }

    useEventListener("scroll", handlescrollToBottom, elementRef, {
        passive: true,
    })
    return elementRef
}

export default useDetectScrolledToBottom
