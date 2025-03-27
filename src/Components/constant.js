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
