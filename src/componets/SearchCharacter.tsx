import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchCharacter = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = React.useState(
        searchParams.get("name") || ''
    );

    return (
        <div className='flex text-xs md:text-sm  text-neutral-200 gap-1 md:gap-2' >
            <input
                placeholder='buscar personaje'
                className='outline:none focus:outline-none p-1 w-9/12 md:p-2  bg-neutral-800'
                type="text"
                value={name} onChange={(e) => setName(e.target.value)} />
            <button
                onClick={onSearch}
                className='bg-neutral-800 p-2 md:p-3 text-neutral-400' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>

        </div>
    );

    function onSearch() { setSearchParams({ name }) };

}

export default SearchCharacter