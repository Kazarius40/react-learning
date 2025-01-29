const baseUrl = import.meta.env.VITE_BASE_URL;

const fetchData = async (endpoint: string) => {
    const response = await fetch(baseUrl + endpoint);
    return response.json();
};

export const fetchUsers = () => fetchData('/users');
export const fetchUserById = (id: string) => fetchData('/users/' + id);
