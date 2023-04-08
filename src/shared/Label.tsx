import { FC } from "react"

const Label: FC<props> = (props) => {
    return (
        <button
            style={{
                backgroundColor: props.color,
                display: !props.text ? 'none' : 'block',
                width: props.width
            }}
            className="rounded-sm bg-zinc-200 py-1 px-4 text-gray-700 "
        >
            {props.text}
        </button>
    )
}

type props = { text: string, color?: string, width?: string }

export default Label