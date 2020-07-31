const movie_list = [
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Language: "English, Spanish",
    Country: "USA, UK",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "I Am Legend",
    Year: "2007",
    Rated: "PG-13",
    Released: "14 Dec 2007",
    Runtime: "101 min",
    Genre: "Drama, Horror, Sci-Fi",
    Director: "Francis Lawrence",
    Language: "English",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "300",
    Year: "2006",
    Rated: "R",
    Released: "09 Mar 2007",
    Runtime: "117 min",
    Genre: "Action, Drama, Fantasy",
    Director: "Zack Snyder",
    Language: "English",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    Rated: "PG-13",
    Released: "04 May 2012",
    Runtime: "143 min",
    Genre: "Action, Sci-Fi, Thriller",
    Director: "Joss Whedon",
    Language: "English, Russian",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "The Wolf of Wall Street",
    Year: "2013",
    Rated: "R",
    Released: "25 Dec 2013",
    Runtime: "180 min",
    Genre: "Biography, Comedy, Crime",
    Director: "Martin Scorsese",
    Language: "English, French",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Language: "English",
    Country: "USA, UK",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "Game of Thrones",
    Year: "2011–",
    Rated: "TV-MA",
    Released: "17 Apr 2011",
    Runtime: "56 min",
    Genre: "Adventure, Drama, Fantasy",
    Director: "N/A",
    Language: "English",
    Country: "USA, UK",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "Vikings",
    Year: "2013–",
    Rated: "TV-14",
    Released: "03 Mar 2013",
    Runtime: "44 min",
    Genre: "Action, Drama, History",
    Director: "N/A",
    Language: "English, Old English, Norse, Old, Latin",
    Country: "Ireland, Canada",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "Gotham",
    Year: "2014–",
    Rated: "TV-14",
    Released: "01 Aug 2014",
    Runtime: "42 min",
    Genre: "Action, Crime, Drama",
    Director: "N/A",
    Language: "English",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "Power",
    Year: "2014–",
    Rated: "TV-MA",
    Released: "N/A",
    Runtime: "50 min",
    Genre: "Crime, Drama",
    Director: "N/A",
    Language: "English",
    Country: "USA",
    Awards: "1 win & 6 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "Narcos",
    Year: "2015–",
    Rated: "TV-MA",
    Released: "28 Aug 2015",
    Runtime: "49 min",
    Genre: "Biography, Crime, Drama",
    Director: "N/A",
    Language: "English, Spanish",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    Title: "Breaking Bad",
    Year: "2008–2013",
    Rated: "TV-14",
    Released: "20 Jan 2008",
    Runtime: "49 min",
    Genre: "Crime, Drama, Thriller",
    Director: "N/A",
    Language: "English, Spanish",
    Country: "USA",
    Awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    ComingSoon: true,
    Title: "Doctor Strange",
    Year: "2016",
    Rated: "N/A",
    Released: "04 Nov 2016",
    Runtime: "N/A",
    Genre: "Action, Adventure, Fantasy",
    Director: "Scott Derrickson",
    Language: "English",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    ComingSoon: true,
    Title: "Rogue One: A Star Wars Story",
    Year: "2016",
    Rated: "N/A",
    Released: "16 Dec 2016",
    Runtime: "N/A",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Gareth Edwards",
    Writer:
      "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
    Actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
    Plot:
      "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
    Language: "English",
    Country: "USA",
    Awards: "1 nomination.",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    Response: "True",
  },
  {
    ComingSoon: true,
    Title: "Assassin's Creed",
    Year: "2016",
    Rated: "N/A",
    Released: "21 Dec 2016",
    Runtime: "N/A",
    Genre: "Action, Adventure, Fantasy",
    Director: "Justin Kurzel",
    Language: "English",
    Country: "UK, France, USA, Hong Kong",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
    Response: "True"
  },
  {
    ComingSoon: true,
    Title: "Luke Cage",
    Year: "2016–",
    Rated: "TV-MA",
    Released: "30 Sep 2016",
    Runtime: "55 min",
    Genre: "Action, Crime, Drama",
    Director: "N/A",
    Language: "English",
    Country: "USA",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
    Response: "True"
  },
];

console.log(movie_list([1]));