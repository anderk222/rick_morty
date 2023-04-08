import { FC } from 'react'
import LoadingCard from './LoadingCard';

const LoadinCards: FC<props> = ({ num }) => {

    const iterable = Array.from({ length: num });


    return (
        <div className='flex flex-wrap gap-8' >
            {iterable.map((_, i) => <LoadingCard  key={i}/>)}
        </div>
    )
}

type props = { num: number };

export default LoadinCards