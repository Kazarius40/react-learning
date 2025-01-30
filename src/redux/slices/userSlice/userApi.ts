const baseUrl = import.meta.env.VITE_BASE_URL;

const fetchData = async (endpoint: string) =>
    (await fetch(baseUrl + endpoint)).json()

export const fetchUser = (id?: string) => fetchData(id ? '/users/' + id : '/users');