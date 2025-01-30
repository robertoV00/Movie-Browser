async function fetchMovies(query) {
    // const query = document.querySelector('.search-bar').value
    const response = await fetch(`https://www.omdbapi.com/?apikey=34328269&s=${query}`);
    const data = await response.json();
    return data.Search || [];  // Ensure it returns an array even if no movies are found
}

async function renderMovies() {
    const guardians = await fetchMovies("guardians");
    const avengers = await fetchMovies("avengers");
    const spiderman = await fetchMovies("spiderman");
    const minions = await fetchMovies("minions");
    const nope = await fetchMovies("nope");

    allMovies = [...guardians, ...avengers, ...spiderman, ...minions, ...nope].slice(0, 6);

    displayMovies(allMovies);
}

function displayMovies(movies) {
    const moviesHTML = movies.map((movie) => {
        return `<div class="movie-box">
                        <figure class="movie-image-wrapper">
                            <img class="movie-image" src="${movie.Poster}" alt="">
                            <div class="movie-box-links">
                                <div class="info-container">
                                    <h4 class="hover-title">${movie.Title}</h4>
                                    <div class="time info">
                                        <i class="fa-solid fa-clock icon"></i>
                                        <h4 class="right-side-text">136m</h4>
                                    </div>
                                    <div class="rating info">
                                        <i class="fa-solid fa-star icon"></i>
                                        <h4 class="right-side-rating">4.5</h4>
                                    </div>
                                    <div class="language info">
                                        <i class="fa-solid fa-earth-americas icon"></i>
                                        <h4 class="right-side-language">English</h4>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div class="movie-name-wrapper">
                            <h4 class="movie-name">${movie.Title}</h4>
                        </div>
                    </div>`;
    }).join("");

    document.querySelector('.movie-selection-wrapper').innerHTML = moviesHTML;
}

const searchIcon = document.querySelector('.magnifying-glass');
const searchInput = document.querySelector('.search-bar');

searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    console.log('Search term:', searchTerm); // Debug search term

    if (searchTerm === '') {
        displayMovies(allMovies);
    } else {
        const filteredMovies = allMovies.filter(movie => {
            const movieTitle = movie.Title.toLowerCase();
            console.log('Checking movie:', movieTitle); // Debug each movie check
            return movieTitle.includes(searchTerm);
        });
        console.log('Filtered movies:', filteredMovies); // Debug filtered results
        displayMovies(filteredMovies);
    }
});


// Initial render
renderMovies();