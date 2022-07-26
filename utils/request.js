const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchedTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchedTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`,
  },
  fetchedActionMovies: {
    title: "Actions",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=3`,
  },
  fetchedComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=3`,
  },
  fetchedHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=3`,
  },
  fetchedRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=3`,
  },
  fetchedMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&page=3`,
  },
  fetchedScifiMovies: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&page=3`,
  },
  fetchedWesternMovies: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37&page=3`,
  },
  fetchedAnimations: {
    title: "Animations",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16&page=3`,
  },
  fetchedTvShows: {
    title: "TV Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&page=3`,
  },
};
