interface ItemListProps {
    children: JSX.Element[]
}

export default function ItemList({ children }: ItemListProps) {
    return <ul className="list">{children}</ul>
}
