import { FC } from 'react'
import Label from '../shared/Label'

const CharacterCategories: FC<props> = ({ categories }) => {
    return (
        <>
            <p >Categorias</p>
            <div className="flex flex-wrap gap-2 text-sm " >
                {categories.map((v, i) => <Label key={i} text={v} />)}
            </div>
        </>
    )
};

type props = { categories: string[] };

export default CharacterCategories