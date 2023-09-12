document.addEventListener('DOMContentLoaded', function () {
    const listMoviesElement = document.getElementById('list_movies');

    // Fetch the list of Star Wars movies from the URL
    fetch('https://swapi-api.hbtn.io/api/films/?format=json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Extract the array of movie objects from the fetched data
        const movies = data.results;
        // Loop through the movies and add their titles to the HTML list
        movies.forEach((movie) => {
          const listItem = document.createElement('li');
          listItem.textContent = movie.title;
          listMoviesElement.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
