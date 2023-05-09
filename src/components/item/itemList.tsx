import { ReactNode } from "react"

interface ItemListProps {
    children: ReactNode | ReactNode[]
}

export default function ItemList({ children }: ItemListProps) {
    return <ul className="list">{children}</ul>
}
