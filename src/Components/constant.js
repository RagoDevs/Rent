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
