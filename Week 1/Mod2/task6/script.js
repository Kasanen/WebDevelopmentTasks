var targetSection = document.getElementById('ulli');

const movies = [];

const movieAmount = parseInt(prompt('Enter number of movies: '));

for (let i = 0; i < movieAmount; i++) {
  let movie = {
    movieName: '',
    movieRating: '',
  };
  movie.movieName = prompt('Enter movie name: ');
  while (true) {
    const rating = parseInt(prompt('Enter movie rating from 1 - 5: '));
    if (rating > 5 || rating < 1) {
      console.log('Number out of range');
    } else {
      movie.movieRating = rating;
      break;
    }
  }
  movies.push(movie);
}

movies.sort((a, b) => b.movieRating - a.movieRating);

for (let i = 0; i < movies.length; i++) {
  var li = document.createElement('li');

  li.textContent =
    'Movie name: ' + movies[i].movieName + ' Rating: ' + movies[i].movieRating;

  targetSection.appendChild(li);
}
console.log(movies);
