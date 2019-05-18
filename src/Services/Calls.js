export const api_key = process.env.REACT_APP_NEWS_API_KEY

export const getSources = async () => {
    try {
        const url = await fetch(`https://newsapi.org/v2/sources?country=us&apiKey=${api_key}`);
        const resp = await url.json()
        return resp.sources;
    } catch (error) {
        throw error
    }
}

export const getTrending = async () => {
    try {
        const url = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`);
        const resp = await url.json()
        return resp.articles
    } catch (error) {
        throw error
    }
}

export const querySearch = async (query) => {
    try {
        const url = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`);
        const resp = await url.json()
        return resp;
    } catch (error) {
        throw error
    }
}

export const findBySource = async (sourceId) => {
    try {
        const url = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${api_key}`);
        const resp = await url.json();
        return resp;
    } catch (error) {
        throw error
    }
}

export const findByCategory = async (category) => {
    try {
        const url = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`)
        const resp = await url.json();
        return resp
    } catch (error) {
        throw error
    }
}
