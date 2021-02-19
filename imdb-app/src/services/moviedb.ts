import axios from "axios";

const ACCESS_TOKEN = "d7fa4f7b75405d4d689569810eee8f33";
const URL = "https://api.themoviedb.org/3";
const userRaitings = `${URL}/movie/top_rated`;

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(userRaitings, {
      params: {
        api_key: ACCESS_TOKEN,
        language: "en_US",
        page: 1,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
