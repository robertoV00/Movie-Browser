const searchIcon = document.querySelector('.magnifying-glass');
const searchInput = document.querySelector('.search-bar');
const movieTool = document.querySelectorAll('.movie-box');
const spinner = document.querySelector('.movies-list-spinner');

let allMovies = [];


searchIcon.addEventListener('click', (event) => {
    movieTool.forEach(movieTool => {
        movieTool.classList.add('movie-invisible'); // ✅ No dot in class name
    });
    spinner.classList.add('spinner-visible')
    setTimeout(() => {
        renderMovies();
    }, 1500)
    // spinner.classList.remove('spinner-visible')
});


searchInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        setTimeout(() => {
            renderMovies();
        }, 1000);
    }
});


async function fetchMovies(query) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=34328269&s=${query}`);
    const data = await response.json();
    const movies = data.Search;  // Ensure it returns an array even if no movies are found

    return movies
}

async function renderMovies() {
    // const guardians = await fetchMovies("guardians");
    // const avengers = await fetchMovies("avengers");
    // const spiderman = await fetchMovies("spiderman");
    // const minions = await fetchMovies("minions");
    // const nope = await fetchMovies("nope");
    // allMovies = [...guardians, ...avengers, ...spiderman, ...minions, ...nope].slice(0, 6);

    
    const movies = await fetchMovies(searchInput.value);
    const sixMovies = movies.slice(0, 6);
    const moviesList = document.querySelector('.movie-selection-wrapper');

    const moviesHTML = sixMovies.map((movie) => {
        return `
        <div class="movie-box">
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
            </div>`}).join("");

    moviesList.innerHTML = moviesHTML
            
}