import { FC } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { SortCharacter } from '../types/SortChracter';

const CharacterCard: FC<props> = ({ character }) => {

  return (
    <div
      className=' bg-neutral-700 text-zinc-300 justify-center  hover:bg-neutral-900 w-64 overflow-hidden sha rounded-md card_animated flex hover:shadow-md flex-col  '

    >

      <img className='' src={character.image} />

      <Link 
      className=' font-medium transition-all hover:text-blue-200  text-center p-5'
      
      to={character.id}>{character.name} </Link>

    </div>
  )
}

type props = { character: SortCharacter };

export default CharacterCard;