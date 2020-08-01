class MovieClass {
    constructor(movie_list) {
        this.movies = movie_list
    }

    getAllMovies() {
        return this.movies;
    }

    searchByString(string) {
        // Google about filter
        // we are searching by title 
        return this.movies.filter((movie) => movie.Title.toLowerCase().includes(string))
    }

    rentMovie(id) {
        //First find the movie you want to rent
        const movieIndex = this.movies.findIndex(movie => movie.id === id);
        //splice removes an element from from a array and then returns an array the removed elements in this case
        //we want to remove just one element, so it will be at position 0

        //try this console.log(this.movies.splice(movieIndex, 1))
        return this.movies.splice(movieIndex, 1)[0]
    }
}