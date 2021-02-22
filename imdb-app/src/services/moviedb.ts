import axios from "axios";

const ACCESS_TOKEN = "d7fa4f7b75405d4d689569810eee8f33";
const URL = "https://api.themoviedb.org/3";
const postersURI = "https://image.tmdb.org/t/p/original/";
const topMoviesURI = `${URL}/movie/top_rated`;
const popularMoviesURI = `${URL}/movie/popular`;
const nowPlayingMoviesURI = `${URL}/movie/now_playing`;

interface IMovieInfo {
  id: string;
  title: string;
  overview: string;
  backdrop_path: string;
  vote_average: string;
}

export const fetchMovies = async (listType: string) => {
  const requestURL =
    listType === "popular"
      ? popularMoviesURI
      : listType === "topRated"
      ? topMoviesURI
      : listType === "nowPlaying"
      ? nowPlayingMoviesURI
      : "error";

  try {
    const { data } = await axios.get(requestURL, {
      params: {
        api_key: ACCESS_TOKEN,
        language: "en_US",
        page: 1,
      },
    });
    const moviesData = data["results"].map((movieInfo: IMovieInfo) => ({
      id: movieInfo["id"],
      title: movieInfo["title"],
      description: movieInfo["overview"],
      poster: postersURI + movieInfo["backdrop_path"],
      rating: movieInfo["vote_average"],
    }));
    return moviesData;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async (id: string) => {
  const requestURL = `${URL}/movie/${id}`
  try {
    const { data } = await axios.get(requestURL, {
      params: {
        api_key: ACCESS_TOKEN,
        language: "en_US",
      },
    });
    const movieData = {
      id: data["id"],
      title: data["title"],
      genres: data["genres"],
      description: data["overview"],
      poster: postersURI + data["backdrop_path"],
      rating: data["vote_average"],
    };

    return movieData;
  } catch (error) {
    console.log(error);
  }
};
