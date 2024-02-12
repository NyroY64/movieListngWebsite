const apiKey = '33da2df5ba84adb1f4927e930a42f8e6';

async function getTopMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=revenue.desc`);
    const data = await response.json();
    return data.results.slice(0, 50); 
  } catch (error) {
    console.error('Error fetching top movies:', error);
    return [];
  }
}

async function displayMovies() {
  const movieListContainer = document.getElementById('movieList');
  const topMovies = await getTopMovies();

  topMovies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movieCard';

    const movieImage = document.createElement('img');
    movieImage.className = 'movieImage';
    movieImage.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    movieImage.alt = movie.title;

    const releaseDate=document.createElement('div');
    releaseDate.textContent=movie.release_date;


    const movieTitle = document.createElement('div');
    movieTitle.className = 'movieTitle';
    movieTitle.textContent = movie.title;

    
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(releaseDate);
    movieListContainer.appendChild(movieCard);
  });
}

displayMovies();