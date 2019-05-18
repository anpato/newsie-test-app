const Axios = require('axios');

export const api_key = process.env.REACT_APP_NEWS_API_KEY

export const getSources = async () => {
    try {
        const resp = await Axios.get(`https://newsapi.org/v2/sources?country=us&apiKey=${api_key}`);
        console.log(resp);
        return resp;
    } catch (error) {
        throw error
    }
}

export default api_key;