import { useParams } from "react-router-dom"
import { useFetch } from '../hooks/useFetch';
import { getCharacter } from "../api/characters.api";
import { Character } from "../types";
import Acordeon from "../shared/Acordeon";
import CharacterCategories from "../componets/CharacterCategories";
import Divider from "../shared/Divider";

const CharacterDetail = () => {

  const { idcharacter } = useParams();
  const { status, data, error } = useFetch<Character>(() => { return getCharacter(idcharacter!) });

  return (
      <div className="flex flex-col w-full h-full gap-3 " >


        {status == 'loading' && (
          <div className="h-screen w-full justify-center flex  items-center" >
            <img className="animate-pulse opacity-30" src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" />
          </div>
        )}

        {data &&
          <>
            <div className="flex p-4 w-full bg-stone-900 justify-center">
              <img className="max-h-[600px] w-7/12 md:w-fit  opacity-80   max-w-[700px]" src={data?.image} alt="" />
            </div>
            <div className="p-3 flex gap-4 flex-col" >
              <div className="flex flex-col">
                <h2 className="text-xl font-medium" >{data.name}</h2>
                <p className="text-zinc-600 self-end" > Subido en el {data.created.split('-')[0]}</p>
              </div>
              <Divider />
              <CharacterCategories categories={[data.species, data.gender, data.status, data.type]} />

              <Acordeon text="Ubicacion" >
                <>
                  <p> Puedes encontrar a  {data.name} en  <a className="text-blue-700 hover:text-blue-600" target={'_blank'} href={data.location.url} >
                    {data.location.name}
                  </a>
                  </p>
                </>
              </Acordeon>
              <Acordeon text="Origen" >
                <>
                  <p> El lugar de origin de {data.name} es <a className="text-blue-700 hover:text-blue-600" target={'_blank'} href={data.origin.url} > {data.origin.name} </a>
                  </p>
                </>
              </Acordeon>
            </div>
          </>

        }

      </div>
  )
}

export default CharacterDetail