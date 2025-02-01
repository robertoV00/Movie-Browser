const searchIcon = document.querySelector('.magnifying-glass');
const searchInput = document.querySelector('.search-bar');
let allMovies = [];

searchIcon.addEventListener('click', (event) => {
    if (event.key === "Enter") {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = allMovies.filter(movie =>
            movie.Title.toLowerCase().includes(searchTerm)
        );
        if(filteredMovies === searchTerm) {
            displayMovies(filteredMovies);
        }
        else {
            console.log("It didn't work");
        }
    }
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        const searchTerm = searchInput.value.toLowerCase();
        
        // Filter and limit to 6 movies
        const filteredMovies = allMovies
            .filter(movie => movie.Title.toLowerCase().includes(searchTerm))
            .slice(0, 6);
            
        if (filteredMovies === searchTerm) {
            displayMovies(filteredMovies.slice(0, 6));
        } else {
            console.log("No matching movies found");
            displayMovies(allMovies.slice(0, 6));
        }
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
    // const nope = await fetchMovies("nope");``
    
    const movies = await fetchMovies("guardians", "avengers", "spiderman", "minions", "nope");
    const moviesList = document.querySelector('.movie-selection-wrapper');

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
            </div>
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
            </div>
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
            </div>
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
            </div>
            <div class="movie-box">
                <figure class="movie-image-wrapper">
                    <img class="movie-image" src="${movie.Title}" alt="">
                    <div class="movie-box-links ">
                        <div class="info-container verse-info-links">
                            <h4 class="hover-title verse-title">${movie.Title}</h4>
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
            </div>
            <div class="movie-box">
                <figure class="movie-image-wrapper">
                    <img class="movie-image" src="${movie.Poster}" alt="">
                    <div class="movie-box-links">
                        <div class="info-container nope-info-links">
                            <h4 class="hover-title nope-title">${movie.Title}</h4>
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
                    <h4 cla ss="movie-name">${movie.Title}</h4>
                </div>
            </div>`
    }).join("");
    
    // allMovies = [...guardians, ...avengers, ...spiderman, ...minions, ...nope].slice(0, 6);
    moviesList.innerHTML = moviesHTML

    
}

console.log('This is the render movie function: ' + renderMovies());

// async function displayMovies(movies) {
//     const moviesList = document.querySelector('.movie-selection-wrapper');
//     const moviesHTML = movies.map((movie) => {
//         return `<div class="movie-box">
//                 <figure class="movie-image-wrapper">
//                     <img class="movie-image" src="${movie.Poster}" alt="">
//                     <div class="movie-box-links">
//                         <div class="info-container">
//                             <h4 class="hover-title">${movie.Title}</h4>
//                             <div class="time info">
//                                 <i class="fa-solid fa-clock icon"></i>
//                                 <h4 class="right-side-text">136m</h4>
//                             </div>
//                             <div class="rating info">
//                                 <i class="fa-solid fa-star icon"></i>
//                                 <h4 class="right-side-rating">4.5</h4>
//                             </div>
//                             <div class="language info">
//                                 <i class="fa-solid fa-earth-americas icon"></i>
//                                 <h4 class="right-side-language">English</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </figure>
//                 <div class="movie-name-wrapper">
//                     <h4 class="movie-name">${movie.Title}</h4>
//                 </div>
//             </div>
//             <div class="movie-box">
//                 <figure class="movie-image-wrapper">
//                     <img class="movie-image" src="${movie.Poster}" alt="">
//                     <div class="movie-box-links">
//                         <div class="info-container">
//                             <h4 class="hover-title">${movie.Title}</h4>
//                             <div class="time info">
//                                 <i class="fa-solid fa-clock icon"></i>
//                                 <h4 class="right-side-text">136m</h4>
//                             </div>
//                             <div class="rating info">
//                                 <i class="fa-solid fa-star icon"></i>
//                                 <h4 class="right-side-rating">4.5</h4>
//                             </div>
//                             <div class="language info">
//                                 <i class="fa-solid fa-earth-americas icon"></i>
//                                 <h4 class="right-side-language">English</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </figure>
//                 <div class="movie-name-wrapper">
//                     <h4 class="movie-name">${movie.Title}</h4>
//                 </div>
//             </div>
//             <div class="movie-box">
//                 <figure class="movie-image-wrapper">
//                     <img class="movie-image" src="${movie.Poster}" alt="">
//                     <div class="movie-box-links">
//                         <div class="info-container">
//                             <h4 class="hover-title">${movie.Title}</h4>
//                             <div class="time info">
//                                 <i class="fa-solid fa-clock icon"></i>
//                                 <h4 class="right-side-text">136m</h4>
//                             </div>
//                             <div class="rating info">
//                                 <i class="fa-solid fa-star icon"></i>
//                                 <h4 class="right-side-rating">4.5</h4>
//                             </div>
//                             <div class="language info">
//                                 <i class="fa-solid fa-earth-americas icon"></i>
//                                 <h4 class="right-side-language">English</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </figure>
//                 <div class="movie-name-wrapper">
//                     <h4 class="movie-name">${movie.Title}</h4>
//                 </div>
//             </div>
//             <div class="movie-box">
//                 <figure class="movie-image-wrapper">
//                     <img class="movie-image" src="${movie.Poster}" alt="">
//                     <div class="movie-box-links">
//                         <div class="info-container">
//                             <h4 class="hover-title">${movie.Title}</h4>
//                             <div class="time info">
//                                 <i class="fa-solid fa-clock icon"></i>
//                                 <h4 class="right-side-text">136m</h4>
//                             </div>
//                             <div class="rating info">
//                                 <i class="fa-solid fa-star icon"></i>
//                                 <h4 class="right-side-rating">4.5</h4>
//                             </div>
//                             <div class="language info">
//                                 <i class="fa-solid fa-earth-americas icon"></i>
//                                 <h4 class="right-side-language">English</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </figure>
//                 <div class="movie-name-wrapper">
//                     <h4 class="movie-name">${movie.Title}</h4>
//                 </div>
//             </div>
//             <div class="movie-box">
//                 <figure class="movie-image-wrapper">
//                     <img class="movie-image" src="${movie.Title}" alt="">
//                     <div class="movie-box-links ">
//                         <div class="info-container verse-info-links">
//                             <h4 class="hover-title verse-title">${movie.Title}</h4>
//                             <div class="time info">
//                                 <i class="fa-solid fa-clock icon"></i>
//                                 <h4 class="right-side-text">136m</h4>
//                             </div>
//                             <div class="rating info">
//                                 <i class="fa-solid fa-star icon"></i>
//                                 <h4 class="right-side-rating">4.5</h4>
//                             </div>
//                             <div class="language info">
//                                 <i class="fa-solid fa-earth-americas icon"></i>
//                                 <h4 class="right-side-language">English</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </figure>
//                 <div class="movie-name-wrapper">
//                     <h4 class="movie-name">${movie.Title}</h4>
//                 </div>
//             </div>
//             <div class="movie-box">
//                 <figure class="movie-image-wrapper">
//                     <img class="movie-image" src="${movie.Poster}" alt="">
//                     <div class="movie-box-links">
//                         <div class="info-container nope-info-links">
//                             <h4 class="hover-title nope-title">${movie.Title}</h4>
//                             <div class="time info">
//                                 <i class="fa-solid fa-clock icon"></i>
//                                 <h4 class="right-side-text">136m</h4>
//                             </div>
//                             <div class="rating info">
//                                 <i class="fa-solid fa-star icon"></i>
//                                 <h4 class="right-side-rating">4.5</h4>
//                             </div>
//                             <div class="language info">
//                                 <i class="fa-solid fa-earth-americas icon"></i>
//                                 <h4 class="right-side-language">English</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </figure>
//                 <div class="movie-name-wrapper">
//                     <h4 cla ss="movie-name">${movie.Title}</h4>
//                 </div>
//             </div>`;
//     }).join("");

//     moviesList.innerHTML = moviesHTML;
//     renderMovies();
// }