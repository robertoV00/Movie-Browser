const searchIcon = document.querySelector('.magnifying-glass');
const searchInput = document.querySelector('.search-bar');
const movieTool = document.querySelectorAll('.movie-box');
const spinner = document.querySelector('.movies-list-spinner');

let allMovies = [];

//nav-input
//nav-glass
const navbarInput = document.querySelector('.nav-input');
const navbarGlass = document.querySelector('.nav-glass');

function activateSearch() {
    navbarInput.focus();
    navbarInput.style.border = '1px solid white';
    navbarInput.style.width = '200px'
    navbarGlass.style.transition = 'transform 500ms ease';
    navbarGlass.style.transform = 'translateX(-160px)';

};

navbarInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        const moviesList = document.querySelector('.movie-selection-wrapper');    
        const movieTitle = document.querySelector('.movie-title-display')

        movieTitle.innerHTML = `"${searchInput.value}"`;
        moviesList.innerHTML = `<i class="fa-solid fa-spinner movies-list-spinner spinner-visible"></i>`;
        setTimeout(() => {
            renderMovies();
        }, 1500)
    }
});

navbarInput.addEventListener('blur', () => {
    navbarInput.style.width = '0';
    navbarInput.style.border = 'none';
    navbarGlass.style.transform = 'translateX(0)';
});


searchIcon.addEventListener('click', (event) => {
    const moviesList = document.querySelector('.movie-selection-wrapper');
    const movieTitle = document.querySelector('.movie-title-display')

    movieTitle.innerHTML = `"${searchInput.value}"`;
    moviesList.innerHTML = `<i class="fa-solid fa-spinner movies-list-spinner spinner-visible"></i>`;
    setTimeout(() => {
        renderMovies();
    }, 1500)
    // spinner.classList.remove('spinner-visible')
});


searchInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        const moviesList = document.querySelector('.movie-selection-wrapper');    
        const movieTitle = document.querySelector('.movie-title-display')

        movieTitle.innerHTML = `"${searchInput.value}"`;
        moviesList.innerHTML = `<i class="fa-solid fa-spinner movies-list-spinner spinner-visible"></i>`;
        setTimeout(() => {
            renderMovies();
        }, 1500)
    }
});


async function fetchMovies(query) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=34328269&s=${query}`);
    const data = await response.json();
    const movies = data.Search;  // Ensure it returns an array even if no movies are found

    return movies
}

async function renderMovies() {
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