
const movieDetail = document.querySelector("#movie-detail")
const params = new URLSearchParams(location.search);
const imdbID = params.get("id");

if (imdbID) {
    searchMovie(imdbID.trim())
}

async function searchMovie(imdbID) {

    let response = await fetch(`http://www.omdbapi.com/?apikey=e544e5b3&i=${imdbID}`);
    let data = await response.json();

    console.log(data);

    if (data.Response === "True") {
        displayMovieDetail(data)
    } else {
        movieHub.innerHTML = `<p>${data.Error}</p>`
    }

}

function displayMovieDetail(data) {

    movieDetail.innerHTML = `
        <div class="mx-auto w-full max-w-280px self-start overflow-hidden rounded-xl bg-stone-200 md:mx-0">
            <img class="w-full object-cover" src=${data.Poster} alt="">
        </div>

        <div>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">RELEASE DATE</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Released}</p>
                </section>
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">RATED</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Rated}</p>
                </section>
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">RUNTIME</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Runtime}</p>
                </section>
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">GENRE</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Genre}</p>
                </section>
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">IMDB</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.imdbRating}/10</p>
                </section>
            </div>

            <div class="mt-6">
                <p class="text-xs font-semibold tracking-wider text-rose-800">PLOT OVERVIEW</p>
                <p class="mt-2 leading-relaxed text-stone-700">${data.Plot}</p>
            </div>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">DIRECTOR</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Director}</p>
                </section>
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">WRITER</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Writer}</p>
                </section>
            </div>

            <div class="mt-6">
                <p class="text-xs font-semibold tracking-wider text-rose-800">ACTORS</p>
                <p class="mt-1 text-sm font-medium text-stone-900">${data.Actors}</p>
            </div>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">LANGUAGE</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Language}</p>
                </section>
                <section>
                    <p class="text-xs font-semibold tracking-wider text-rose-800">COUNTRY</p>
                    <p class="mt-1 text-sm font-medium text-stone-900">${data.Country}</p>
                </section>
            </div>

            <button class="mt-8 rounded-full bg-rose-800 text-sm font-semibold text-white transition hover:bg-rose-900">
                <a href=https://www.imdb.com/title/${data.imdbID} target="_blank" class="block px-6 py-2.5">View in IMDB</a>
            </button>
        </div> 
    `
}

