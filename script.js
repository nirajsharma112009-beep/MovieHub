
const movieForm = document.querySelector("#movie-form");
const movieInput = document.querySelector("#movie-input");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger");
const options = document.querySelector("#options");


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let query = movieInput.value.trim();

    if (!query) {
        return;
    }

    console.log(query);

    searchMovies(query);
})

async function searchMovies(movieName) {

    movieHub.innerHTML = `<div class="col-span-full flex justify-center py-6"><span class="loader"></span></div>`


    let response = await fetch(`http://www.omdbapi.com/?apikey=e544e5b3&s=${encodeURIComponent(movieName)}`);
    let data = await response.json();

    console.log(data);

    if (data.Response === "True") {
        displayMovie(data.Search);
    } else {
        movieHub.innerHTML = `<p class="col-span-full text-center text-red-400 py-16 text-lg">${data.Error || 'No movies found.'}</p>`;
    }


}

function displayMovie(movies) {

    movieHub.innerHTML = ""


    movies.forEach((movie) => {
        const div = document.createElement("div");

        div.dataset.imdbID = movie.imdbID;
        div.setAttribute("class", "movie-card");

        const poster = (movie.Poster && movie.Poster !== "N/A") ? movie.Poster : NO_POSTER;
        console.log({ poster, mp: movie.Poster });

        div.innerHTML = `
        <div
            class="group block rounded-2xl border border-stone-200 bg-white p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-rose-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800">
            <div class="aspect-2/3 overflow-hidden rounded-[10px] bg-stone-200">
                <img class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    src="${movie.Poster}" alt="${movie.Title} poster" loading="lazy">
            </div>
            <div class="mt-2.5 px-0.5 pb-1">
                <p
                    class="line-clamp-2 min-h-2.5rem text-[13px] font-semibold leading-5 text-stone-900 group-hover:text-rose-800">
                    ${movie.Title}</p>
                <p class="mt-0.5 text-xs text-stone-500">${movie.Year}</p>
            </div>
        </div>
    `

        movieHub.append(div)
    })
}

movieHub.addEventListener("click", (e) => {
    e.stopPropagation();

    const movieCard = e.target.closest(".movie-card");
    const imdbID = movieCard.dataset.imdbID;

    location.href = `movie-details.html?id=${imdbID}`
})

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    options.classList.toggle("hidden");
})

let data = [
    {
        "Title": "Kill Bill: Vol. 1",
        "Year": "2003",
        "imdbID": "tt0266697",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "Title": "Kill Bill: Vol. 2",
        "Year": "2004",
        "imdbID": "tt0378194",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2FiNzhiZTctNzU1Mi00NDkwLWExNDMtZTg0MjYyNzhkNWNkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "To Kill a Mockingbird",
        "Year": "1962",
        "imdbID": "tt0056592",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTlkYWU4MGEtZmQyYi00OWEzLTgzY2EtYzVjOTEzYzAyNTk1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "A Time to Kill",
        "Year": "1996",
        "imdbID": "tt0117913",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmNiYzY1N2ItZDZiNC00ZGMyLWJlZjktZDE1MDI3NDBlYjE5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Sin City: A Dame to Kill For",
        "Year": "2014",
        "imdbID": "tt0458481",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5ODYwNjgxMF5BMl5BanBnXkFtZTgwMTcwNzAyMjE@._V1_SX300.jpg"
    },
    {
        "Title": "Licence to Kill",
        "Year": "1989",
        "imdbID": "tt0097742",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjY3OWJkMjMtYTgwYS00MjJjLWE4M2ItOWVhOWMxNGM1NDk3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "A View to a Kill",
        "Year": "1985",
        "imdbID": "tt0090264",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjc3ZTJkZjUtM2E4Mi00YzA1LWJkZTAtM2U0OWUyYTE4YTFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "3 Days to Kill",
        "Year": "2014",
        "imdbID": "tt2172934",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzM0MjE0Nzg1N15BMl5BanBnXkFtZTgwODA4ODE4MDE@._V1_SX300.jpg"
    },
    {
        "Title": "Righteous Kill",
        "Year": "2008",
        "imdbID": "tt1034331",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwMjg3MjY3OV5BMl5BanBnXkFtZTcwNTc4MDU3MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Generation Kill",
        "Year": "2008",
        "imdbID": "tt0995832",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2NjAxOTQzNl5BMl5BanBnXkFtZTcwMjk4NzU3MQ@@._V1_SX300.jpg"
    }
];

displayMovies(data);