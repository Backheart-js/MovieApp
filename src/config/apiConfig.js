const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: 'c6dce2ea2e6f20721302c4224a056fda',
    originalImage: (file_path) => `https://image.tmdb.org/t/p/original/${file_path}`,
    w500Image: (file_path) => `https://image.tmdb.org/t/p/w500/${file_path}`
}

export default apiConfig;