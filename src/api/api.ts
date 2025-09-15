
const BASE_URL = "https://api-testefrontend.qforms.com.br";

export const fetchEmployee = () => {
    return fetch(`${BASE_URL}/employees`);
};

export const getEmployee = (id: string) => {
    return fetch(`${BASE_URL}/employees/${id}`);
};

export const createEmployee = (data: any) => {
    return fetch(`${BASE_URL}/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export const updateEmployee = (id: string, data: any) => {
    return fetch(`${BASE_URL}/employees/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export const deleteEmployee = (id: string) => {
    return fetch(`${BASE_URL}/employees/${id}`, {
        method: 'DELETE',
    });
};