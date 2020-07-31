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
    Writer:
      "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
    Actors:
      "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
    Plot:
      "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt1211837",
    Type: "movie",
    Response: "True",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg",
    ],
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
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt3748528",
    Type: "movie",
    Response: "True",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    ],
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
    Writer:
      "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
    Actors:
      "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
    Plot:
      "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
    Language: "English",
    Country: "UK, France, USA, Hong Kong",
    Awards: "N/A",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt2094766",
    Type: "movie",
    Response: "True",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
    ],
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
    Writer: "Cheo Hodari Coker",
    Actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
    Plot:
      "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt3322314",
    Type: "series",
    totalSeasons: "1",
    Response: "True",
    Images: [
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg",
    ],
  },
];