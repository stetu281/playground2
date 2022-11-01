/* export const movie = () => {
  const searchInput = document.querySelector(".movieHeader__input");
  let movies = {};

  document
    .querySelector(".movieHeader__btn")
    .addEventListener("click", async (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.classList.add(
        "movieHeader--searched"
      );
      e.target.value = "";
      movies = await searchMovie(searchInput.value);
      renderSearchResults(movies);
    });

  searchInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.parentElement.parentElement.classList.add(
        "movieHeader--searched"
      );
      e.target.value = ""; */
/* movies = await searchMovie(searchInput.value); */

/* 

      renderSearchResults(movies);

      const cardBtns = document.querySelectorAll(".movieCard__btn");

      for (let btn of cardBtns) {
        btn.addEventListener("click", async (e) => { */
/* let infos = await fetchInfos(e.target.id);
          console.log(infos); */

/*           let infos = {
            Title: "Alien",
            Year: "1979",
            Rated: "R",
            Released: "22 Jun 1979",
            Runtime: "117 min",
            Genre: "Horror, Sci-Fi",
            Director: "Ridley Scott",
            Writer: "Dan O'Bannon, Ronald Shusett",
            Actors: "Sigourney Weaver, Tom Skerritt, John Hurt",
            Plot: "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
            Language: "English",
            Country: "United Kingdom, United States",
            Awards: "Won 1 Oscar. 18 wins & 22 nominations total",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
            Ratings: [
              {
                Source: "Internet Movie Database",
                Value: "8.5/10",
              },
              {
                Source: "Rotten Tomatoes",
                Value: "98%",
              },
              {
                Source: "Metacritic",
                Value: "89/100",
              },
            ],
            Metascore: "89",
            imdbRating: "8.5",
            imdbVotes: "872,760",
            imdbID: "tt0078748",
            Type: "movie",
            DVD: "01 Jun 1999",
            BoxOffice: "$81,900,459",
            Production: "N/A",
            Website: "N/A",
            Response: "True",
          };
          console.log(infos);
          const moviePlotContainer = document.querySelector(
            ".moviePlot__container"
          );
          moviePlotContainer.classList.add("moviePlot--open");
          moviePlotContainer.parentElement.classList.add("noscroll");

          const genreArr = infos.Genre.split(",");
          console.log(genreArr);

          moviePlotContainer.innerHTML = `
            <img src="${
              infos.Poster
            }" class="moviePlot__poster" alt="Movie Poster" />
            <div class="moviePlot__textContainer">
              <h3>${infos.Title}</h3>
              <p class="moviePlot__year">${infos.Year} | ${infos.Runtime}</p>
              <h4>Cast</h4>
              <p>${infos.Actors}</p>
              <h4>Genre</h4>
              <ul class="moviePlot__genre">
                ${genreArr
                  .map((item) => {
                    return "<li>" + item.trim() + "</li>";
                  })
                  .join("")}
              </ul>
              <h4>Ratings</h4>
              <div class="moviePlot__ratingContainer">
                <div class="moviePlot__rating">
                  <h5>IMDB:</h5>
                  <p>${infos.Ratings[0].Value}</p>
                </div>
                <div class="moviePlot__rating">
                  <h5>Rotten Tomatoes:</h5>
                  <p>${infos.Ratings[1].Value}</p>
                </div>
                <div class="moviePlot__rating">
                  <h5>Metacritic:</h5>
                  <p>${infos.Ratings[2].Value}</p>
                </div>
              </div>
              <h4>Plot</h4>
              <p>${infos.Plot}</p>
            </div>
            `;
        });
      }
    }
  });
};

async function searchMovie(searchValue) {
  const key = "e9bcda9a";
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${searchValue}&type=movie`;

  if (search === "") {
    
    console.log("show error");
  }

  try {
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
  } catch (error) {
    
    console.log(error);
  }
}

async function fetchInfos(id) {
  const key = "e9bcda9a";
  const url = `https://www.omdbapi.com/?apikey=${key}&i=${id}`;

  try {
    const response = await fetch(url);
    const infos = await response.json();
    return infos;
  } catch (error) {
    
    console.log(error);
  }
}

function renderSearchResults(movies) {
  console.log(movies);
  const resultContainer = document.querySelector(".movieResults");

  resultContainer.innerHTML = "";

  for (let movie of movies) {
    const card = document.createElement("div");
    card.className = "movieCard";
    card.innerHTML = `
          <img src="${movie.Poster}" />
          <div class="movieCard__text">
          <p>${movie.Year}</p>
            <h3>${movie.Title}</h3>
            
            <button class="movieCard__btn" id="${movie.imdbID}">Infos</button>
          </div>
        `;

    resultContainer.appendChild(card);
  }
} */
