const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3',
    apiKey: '468c9f75d13988cb3480ce29c6210c7d',
    originalImage: (file_path) => `https://image.tmdb.org/t/p/original/${file_path}`,
    w500Image: (file_path) => `https://image.tmdb/t/p/w500/${file_path}`
}

export default apiConfig;