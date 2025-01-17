import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get('page')) || 1;

    return (
        <>
            <button onClick={() => {
                setSearchParams({page: (--currentPage).toString()});
            }}>prev
            </button>
            <button>next</button>
        </>
    );
};