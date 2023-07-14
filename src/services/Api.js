import axios from 'axios';
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN

const API_LANGUAGE_SETTING = {
    'Português': 'pt-BR',
    'English': 'en',
}

const configuredLanguage = localStorage.getItem('language') || 'Português';

const Api = axios.create({
    baseURL: CMS_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {
        'locale': API_LANGUAGE_SETTING[configuredLanguage]
    }
});

export default Api;