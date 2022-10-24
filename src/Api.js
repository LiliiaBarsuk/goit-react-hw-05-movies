const KEY = 'd235d9d84008e448e946d307df920be3';

export const fetchTrendingToday = () => {
   return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
    .then(response => response.json()).then(data => data.results)
};

export const fetchListByQuery = (queryValue) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${queryValue}&page=1&include_adult=false`)
    .then(response => response.json()).then(data => data.results)
}

export const fetchMovieById = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
    .then(r => r.json()).then(data => data)
}

export const fetchCastById = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    .then(r => r.json()).then(data => data.cast)
}

export const fetchReviewsById = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(r => r.json()).then(data => data.results)
}