const movies = [];

function favouriteMovie(operation, movie) {
    if(operation==="add"){
        movies.push(movie)
        return movies
    }
    else if (operation==="remove"){
        movies.pop()
        return movies
    }
    // Write your code here
}

module.exports = favouriteMovie;
