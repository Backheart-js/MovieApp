import httpRequest from "./httpRequest";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    now_playing: 'now_playing'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
    airing_today: 'airing_today'
}

const tmdbAPI = {
    getMoviesList: (type, params) => {
        const url = `movie/${movieType[type]}`;
        return httpRequest.get(url, params)
    },
    getTvList: (type, params) => {
        const url = `tv/${tvType[type]}`;
        return httpRequest.get(url, params)
    },
    getVideo: (cate, id) => {
        const url = `${category[cate]}/${id}/videos`;
        return httpRequest.get(url, {params: {}})
    },
    search: (cate, params) => {
        const url = `search/${category[cate]}`;
        return httpRequest.get(url, params);
    },
    detail: (cate, id, params = {}) => {
        const url = `${category[cate]}/${id}`;
        return httpRequest.get(url, params)
    },
    credits: (cate, id, params = {}) => {
        const url = `${category[cate]}/${id}/credits`;
        return httpRequest.get(url, params)
    },
    similar: (cate, id, params = {}) => {
        const url = `${category[cate]}/${id}/similar`;
        return httpRequest.get(url, params)
    },
    genre: (cate, params) => {
        const url = `genre/${category[cate]}/list`;
        return httpRequest.get(url, params)
    }
}

export default tmdbAPI;