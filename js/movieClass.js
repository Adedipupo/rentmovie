class MovieClass {
    constructor(movie_list) {
        this.movies = movie_list
    }

    getAllMovies() {
        return this.movies;
    }

    searchByString(string) {
        return this.movies.filter((movie) => movie.Title.toLowerCase().includes(string))
    }

    rentMovie(id) {
        const movieIndex = this.movies.findIndex(movie => movie.id === id);
        return this.movies.splice(movieIndex, 1)[0]
    }
}