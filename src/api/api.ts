
const BASE_URL="https://api-testefrontend.qforms.com.br"

export const fetchEmployee = () => {
    return fetch(`${BASE_URL}/employees`)
}