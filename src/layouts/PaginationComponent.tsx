import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const page = Number(searchParams.get('page')) || 1;

    return (
        <>
            <button onClick={() => {
                let currentPage = page;
                setSearchParams((--currentPage).toString());
            }}>prev
            </button>
            <button>next</button>
        </>
    );
};