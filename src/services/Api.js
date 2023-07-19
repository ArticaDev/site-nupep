import axios from 'axios';
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN

const configuredLanguage = localStorage.getItem('language') || 'pt-BR';

const Api = axios.create({
    baseURL: CMS_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {
        'locale': configuredLanguage
    }
});

export default Api;