// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const moviesDir= moviesArray.map((element) => element.director);
    let notTwice= [];
    moviesDir.forEach((element,i) => {
        if(!notTwice.includes(element)){
            notTwice.push(element);
        }
    });
    return notTwice;
}
const film=[{
    title: 'Stalker',
    year: 1979,
    director: 'Andrei Tarkovsky',
    duration: '2h 42min',
    genre: ['Drama', 'Sci-Fi'],
    score: 8.1
  },
  {
    title: 'Butch Cassidy and the Sundance Kid',
    year: 1969,
    director: 'George Roy Hill',
    duration: '1h 50min',
    genre: ['Biography', 'Crime', 'Drama', 'Western'],
    score: 8.1
  }];
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((element) => (element.director==='Steven Spielberg' && element.genre.includes('Drama'))).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length===0){
        return 0;
    }
    const moviesScores= moviesArray.map((element) => (element.score)? element.score : 0);
    const moviesAvg= moviesScores.reduce((acc, element) => {
        return acc+= element;
    }, 0);
    return Number((moviesAvg/moviesScores.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies= moviesArray.filter((movie) => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArr= [...moviesArray];
    const sortByYear= moviesArr.sort((a,b) => {
        if (a.year===b.year){
            return (a.title<b.title)? -1 : 1 ;
        }
        else return a.year-b.year;
    });
    return sortByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesOrder= moviesArray.sort((a,b)=> (a.title<b.title)? -1 : 1 );
    return moviesOrder.map((element)=>element.title).slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesArr= [];
    for(let i=0; i<moviesArray.length; i++){
       let m={};
        for(let key in moviesArray[i]){
            m[key]= moviesArray[i][key];
        }
        moviesArr.push(m);
    }
    moviesArr.forEach(element => {
        let hours= element.duration.slice(0, element.duration.indexOf('h'));
        let minutes= element.duration.slice(element.duration.indexOf(' '), element.duration.indexOf('min'));
        let time= hours*60 + Number(minutes);
        element.duration = time;
    });
    return(moviesArr);

}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
}
