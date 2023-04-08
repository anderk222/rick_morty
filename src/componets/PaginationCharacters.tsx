import { useSearchParams } from 'react-router-dom'
import { usePagination } from '../hooks/usePagination';
import Pagination from '../shared/Pagination'
import { FC, useEffect } from 'react';

const PaginationCharacters: FC<props> = ({ total }) => {

  const [searchParams, setSearchParams] = useSearchParams();


  const { pagination, back, next, determinate, page } = usePagination({ limit: 20, page: 1, total });

  useEffect(() => {

    const page = searchParams.get('p');


    if (!page) return;

    const num = parseInt(page)

    determinate(num);

  }, []);


  return (
    <div className='self-center'>
      <Pagination {...{ ...pagination, onDeterminate, onNext, onBack }} />
    </div >
  );

  function onBack() {

    back((new_page: number) => {

      const query = searchParams.get('name')

      const params = `p=${new_page}${query ? `&name=${query}` : ''}`;

      setSearchParams(new URLSearchParams(params), { replace : true });



    });

  };

  function onNext() {

    next((new_page: number) => {
      const query = searchParams.get('name')

      const params = `p=${new_page}${query ? `&name=${query}` : ''}`;

      setSearchParams(new URLSearchParams(params), { replace : true });

    });

  }

  function onDeterminate(new_page: number) {

    determinate(new_page, (new_page: number) => {

      const query = searchParams.get('name')

      const params = `p=${new_page}${query ? `&name=${query}` : ''}`;
      setSearchParams(new URLSearchParams(params), { replace : true });

    });

  }

}

type props = { total: number };

export default PaginationCharacters