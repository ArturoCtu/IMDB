import axios from "axios";

const ACCESS_TOKEN = "d7fa4f7b75405d4d689569810eee8f33";
const URL = "https://api.themoviedb.org/3";
const topMoviesURI = `${URL}/movie/top_rated`;
const postersURI = 'https://image.tmdb.org/t/p/original/';

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(topMoviesURI, {
      params: {
        api_key: ACCESS_TOKEN,
        language: "en_US",
        page: 1,
      },
    });
    const moviesData = data['results'].map((movieInfo: any)=> ({
      id: movieInfo['id'],
      title: movieInfo['title'],
      description: movieInfo['overview'],
      poster: postersURI + movieInfo['backdrop_path'],
      rating: movieInfo['vote_average'],
    }));
    return moviesData;
  } catch (error) {
    console.log(error);
  }
};
