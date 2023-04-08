import { FC, useCallback, useEffect, useState } from 'react';

const Pagination: FC<props> = (props) => {

    const { onBack, onDeterminate, onNext, limit, page, total } = props;

    const [items, setItems] = useState<number[]>([]);


    useEffect(() => {

        onChangePagination();

    }, [limit, page, total]);


    return (
        <div className='flex border text-xs  md:text-sm bg-white sha rounded-sm font-medium items-center text-blue-700 h-10 md:h-12 w-fit' >

            <button
                onClick={onBack}
                className="text-gray-600 text-center border-r px-2 md:px-4 h-full items-center  " >
                Previous
            </button>

            {items.map((i) => (
                <button
                    key={i}
                    onClick={() => !!onDeterminate && onDeterminate(i)}
                    className="px-3 md:px-5 flex items-center  h-full border-r"> {i}
                </button>)
            )}
            <button
                onClick={onNext}
                className="text-gray-600 text-center border-r px-2 md:px-4 " >
                Next
            </button>

        </div>
    );

    function onChangePagination() {

        const items_available = total - (page * limit);

        const num_iterators = (items_available / limit) < 3 ? 2 : 3;

        let current_item = page;

        const new_items = Array.from({ length: num_iterators }).map(() => {

            current_item++;
            return current_item ;

        });

        setItems(new_items);

    }
};

export type props = {

    limit: number
    page: number
    total: number,
    onNext?: () => void,
    onBack?: () => void,
    onDeterminate?: (n: number) => void

}

export default Pagination;