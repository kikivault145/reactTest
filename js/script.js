"use strict";

const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const firstFilm = prompt('Один из последних просмотренных фильмов?', ''),
      firstScore = prompt('На сколько оцените его?', ''),
      secondFilm = prompt('Один из последних просмотренных фильмов?', ''),
      secondScore = prompt('На сколько оцените его?', '');

let movies = {};
personalMovieDB.movies[firstFilm] = firstScore;
personalMovieDB.movies[secondFilm] = secondScore;

console.log(personalMovieDB);
