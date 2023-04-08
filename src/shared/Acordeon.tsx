import { FC, ReactElement } from 'react'
import { useBoolean } from '../hooks/useBoolean';

const Acordeon: FC<props> = (props) => {

    const { boolean, toggle } = useBoolean();

    return (
        <div className='w-full flex flex-col gap-1' >
            <div onClick={toggle} className='flex cursor-pointer gap-1 items-center' >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className={`${boolean && 'acordeon_svg'} bi-caret-down-fill transition-all`}
                    viewBox="0 0 16 16"
                >

                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <p> {props.text} </p>
            
            </div>
            <div className={!boolean ? 'hidden' : 'text-zinc-700'} >
                {props.children}
            </div>
        </div>
    )
};

type props = {
    text?: string,
    color?: string,
    children: string | ReactElement
}

export default Acordeon