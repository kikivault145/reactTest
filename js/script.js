"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из последних просмотренных фильмов?', ''),
              score = prompt('На сколько оцените его?', '');
    
        if (film != null && score != null && film != '' && score != '' && film.length < 50 && score.length < 50) {
            personalMovieDB.movies[film] = score;
            console.log('Отлично');
        } else {
            console.log('Ошибка');
            --i;
        }    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private) {
        return;
    }
    console.log(personalMovieDB);
}
showMyDB();
