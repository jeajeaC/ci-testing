import classNames from "classnames"
import { MouseEventHandler } from "react"

interface ButtonProps {
    onClick?: MouseEventHandler
    children?: JSX.Element | JSX.Element[]
    disabled?: boolean
    danger?: boolean
    classes?: { [key: string]: boolean }
}

export default function Button({
    onClick,
    children,
    disabled,
    danger,
    classes = {}
}: ButtonProps) {
    return (
        <button
            className={classNames({ button: true, danger, ...classes })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
