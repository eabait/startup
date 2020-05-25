export class MovieServiceClient {
    moviesApiSearch() {
        return fetch('https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&language=en-US&query=batman&page=1&include_adult=false')
            .then(response => response.json())
    }
}