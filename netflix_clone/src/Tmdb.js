const API_KEY = "7cb91b5002b54556758cb4eb2827731c";
const API_BASE = "https://api.themoviedb.org/3";

/*
 - Originais Netflix
 - Recomendados (trending)
 - Em alta (top rated) 
 - Ação
 - Comédia
 - Terror
 - Documentários
 */

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`); // faz a requisição de um endpoint
    const json = await req.json(); // pega o resultado em JSON
    return json;
}

async function getMovieInfo(movieId, type){
    let info = {};

    if(movieId){
        switch(type){
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
            default:
                info = null;
        }
    }

    return info;
}

async function getSimilarTitles(movieId, type){
    let info = {};

    if(movieId){
        switch(type){
            case 'movie':
                info = await basicFetch(`/movie/${movieId}/similar?language=pt-BR&api_key=${API_KEY}`);
                break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}/similar?language=pt-BR&api_key=${API_KEY}`);
                break;
            default:
                info = null;
        }
    }
    return info;
}

async function getHomeList(){
    return [
        {
            slug: 'Originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        }
    ]
}

export {getHomeList, getMovieInfo, getSimilarTitles};