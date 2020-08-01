const Movie = new MovieClass(movie_list);

const $root = document.getElementById('root')
const renderMovies = (movies) => {
    if (!movies) return;

    $root.innerHTML = '';

    movies.forEach((movie) => {
        const cardInnerElements =
            `
                <img class='card__image' src='${movie.Images[0]}/>
                <h3 class='card__title'>Title: ${movie.Title}</h3>
                <div class='card__meta'>
                    <p>Year: ${movie.Year} </p>
                    <p>Genre: ${movie.Genre}</p>
                    <p>Director: ${movie.Director} </p>
                    <button onclick='rentMovie(${movie.id})' class='rentBtn'>Rent</button>
                </div>  
            `;

        //creating a div element
        const card = document.createElement('div');
        //giving it a class of card
        card.setAttribute('class', 'card');

        card.innerHTML = cardInnerElements;

        //appending the card
        $root.appendChild(card)
    });
}

renderMovies(Movie.getAllMovies())

const $input = document.getElementById('myInput');

$input.addEventListener('keyup', (e) => {
    const searchField = e.target.value;

    if (searchField === '') {
        return renderMovies(Movie.getAllMovies())
    }
    const searchMovies = Movie.searchByString(searchField);

    renderMovies(searchMovies)
});

const rentMovie = (id) => {
    const rentedMovie = Movie.rentMovie(id)

    alert(`You have rented ${rentedMovie.Title}`);
    renderMovies(Movie.getAllMovies())
}