import {useEffect, useState} from "react";

export const useFetch = <T,>(url: string, defaultValue: T) => {
    const [obj, setObj] = useState(defaultValue)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setObj(json))
    }, [url])

    return obj;
}