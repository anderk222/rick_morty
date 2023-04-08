import { useFetch } from '../hooks/useFetch';
import { getAllCharacters } from "../api/characters.api";
import { Characters } from "../types";
import LoadinCards from '../shared/LoadinCards';
import CharacterCard from './CharacterCard';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PaginationCharacters from './PaginationCharacters';
import Label from '../shared/Label';
import ShowError from './ShowError';

const CharacterCards = () => {


  const [params, setPrams] = useSearchParams();

  const page = params.get('p');
  const name = params.get('name')

  const { data, status, error, run } = useFetch<Characters>(() => getAllCharacters({ page, name }));


  useEffect(() => {

    run(() => getAllCharacters({ name, page }))

  }, [page]);

  useEffect(() => {

    if (!name) return;

    setPrams({ p: '1', name }, { replace: true })


  }, [name]);

  const canRender = (data?.data && status != 'error');

  return (
    <div className="flex flex-col w-full py-4 items-center gap-4" >

      {canRender && <Label
        {...{ text: `Personajes(${data?.data ? data.data.characters.info.count : ''})`, width: 'fit-content' }}
      />
      }

      {status == 'loading' && <LoadinCards num={20} />}


      {error && <ShowError {...{ error }} />}
      <div className="flex flex-wrap w-full gap-8 md:justify-start justify-center" >

        {canRender && data.data.characters.results.map((character, key) => (
          <CharacterCard {...{ key, character }} />
        ))}
      </div>
      {(canRender && data.data.characters.info.count ) && <PaginationCharacters total={data.data.characters.info.count} />}

    </div>
  )
}

export default CharacterCards;