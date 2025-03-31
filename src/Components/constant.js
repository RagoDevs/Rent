export const base_url = 'https://rentbe.ragodevs.com'

export const getToken = () => localStorage.getItem('rentSiteToken');
export const getExpiry = () => localStorage.getItem('rentSiteExpiry');

export const checkExpiry = () => {
    const expiry = getExpiry();
    if (expiry && Date.now() / 1000 > expiry) {
        return true;
    }
    return false;
};

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${base_url}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error occured with const fetchdata')
        return[];
    }
}

export const submitRequest = async (endpoint, method = 'POST', body = null) => {
    try {
        const response = await fetch(`${base_url}${endpoint}`, {
            method, 
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null
        });
        const res = await response.json();

        if (response.status < 200 || response.status >= 300) {
            throw new Error(res.error || 'Request failed from constant')
        }

        return res;
    } catch (error) {
        console.error('request error', error);
        throw error
    }
}
