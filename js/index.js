const Movie = new MovieClass(movie_list);

const $root = document.getElementById('root')
const renderMovies = (movies) => {
    if (!movies) return;

    $root.innerHTML = ''; // clearing all the elements in the root

    movies.forEach((movie) => {
        // you can reseach literal strings
        const cardInnerElements =
            `
                <img class='card__image' src='${movie.Images[0]}/>
                <h3 class='card__title'>Title: ${movie.Title}</h3>
                <div class='card__meta'>
                    <p>Year: ${movie.Year} </p>
                    <p>Rated: ${movie.Rated} </p>
                    <button onclick='rentMovie(${movie.id})' class='rentBtn'>rent</button>
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

// this will make sure the cards are displayed
// you can comment it to see the differnce 
renderMovies(Movie.getAllMovies())

const $input = document.getElementById('myInput');

$input.addEventListener('keyup', (e) => {
    const searchField = e.target.value;

    //if the input is empty we want to display all the movies
    if (searchField === '') {
        return renderMovies(Movie.getAllMovies())
    }

    //go to the movieclass to see what this does
    const searchMovies = Movie.searchByString(searchField);

    //render the movies that match the searchstring
    renderMovies(searchMovies)
});

// this will be called when the rent button is click
// look at the card__meta button 
const rentMovie = (id) => {
    const rentedMovie = Movie.rentMovie(id)

    alert(`You have rented ${rentedMovie.Title}`);
    // this will render the remaining movies
    renderMovies(Movie.getAllMovies())
}