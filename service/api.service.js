import { getKey, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios';

const getWeather = async (city) => {
    const token = await getKey(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задаайте его через команду -t [API_KEY]')
    }
    const { data } = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
            key: token,
            q: city,
            lang: 'ru',
            aqi: 'no'
        }
    })
    return data;
    /* const url = new URL(`https://api.weatherapi.com/v1/current.json`)
    url.searchParams.append('key', token)
    url.searchParams.append('lang', 'ru')
    url.searchParams.append('q', city)
    url.searchParams.append('aqi', 'no')
    console.log(url);
    https.get(url, (response) => {
        let result = ''
        response.on('data', (chunk) => {
            result += chunk;
        });

        response.on('end', () => {
            console.log(result);
        });
    }) */
};

export { getWeather }