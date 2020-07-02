let numbersOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?"),
    a = prompt("Какой последний фильм Вы посмотрели?"),
    b = prompt("Во сколько Вы его оцените?"),
    c = prompt("Какой последний фильм Вы посмотрели?"),
    d = prompt("Во сколько Вы его оцените?"),
    personalMovieDB = {
        count: numbersOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);