import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');

    return (
        <>
            <button onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page: (--currentPage).toString()});
                }
            }}>
                prev
            </button>
            <button onClick={() => setSearchParams({page: (++currentPage).toString()})}>
                next
            </button>
        </>
    );
};