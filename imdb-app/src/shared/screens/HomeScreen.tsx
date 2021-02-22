import React, { useEffect, useState } from "react";
import { MovieCard } from "shared/organisms/MovieCard";
import { fetchMovies } from "services/moviedb";
import { Row, Col, Layout } from "antd";
import { Texts } from "shared/atoms/Texts";
import { Box } from "shared/atoms/Box";
import { SortingCluster } from "shared/molecules/SortingCluster";

interface IMovieSimple {
  id: string;
  title: string;
  poster: string;
  rating: string;
}

export const HomeScreen = () => {
  const [popularMovies, setPopularMovies] = useState<IMovieSimple[]>([]);
  const [topMovies, setTopMovies] = useState<IMovieSimple[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovieSimple[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { Heading2 } = Texts;

  useEffect(() => {
    const receiveMovies = async () => {
      setPopularMovies(await fetchMovies("popular"));
      setTopMovies(await fetchMovies("topRated"));
      setNowPlayingMovies(await fetchMovies("nowPlaying"));
      setLoading(false);
    };
    receiveMovies();
  }, []);

  const sortByRating = (moviesArr: IMovieSimple[], direction: number) => {
    //If direction === 1 then descending order, if direction === -1 then ascending
    return [...moviesArr].sort((a, b) =>
      a.rating > b.rating ? -1 * direction : 1 * direction
    );
  };

  const sortAlphabetical = (moviesArr: IMovieSimple[], direction: number) => {
    //If direction === 1 then descending order, if direction === -1 then ascending
    return [...moviesArr].sort((a, b) =>
      a.title > b.title ? -1 * direction : 1 * direction
    );
  };

  const getMovieCards = (moviesArr: IMovieSimple[]) =>
    moviesArr.map((movie) => {
      return (
        <Col key={movie["id"]}>
          <MovieCard
            id={movie["id"]}
            title={movie["title"]}
            poster={movie["poster"]}
            rating={movie["rating"]}
          />
        </Col>
      );
    });

  if (isLoading) {
    return (
      <Layout>
        <Row justify="center">
          <Heading2>Loading...</Heading2>
        </Row>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Box margin="35px 0 10px 0">
          <Row justify="center">
            <Heading2>Most Popular Movies</Heading2>
          </Row>
          <SortingCluster
            sortByRatingD={() => setPopularMovies(sortByRating(popularMovies, -1))}
            sortByRatingA={() => setPopularMovies(sortByRating(popularMovies, 1))}
            sortAlphabeticalD={() => setPopularMovies(sortAlphabetical(popularMovies, -1))}
            sortAlphabeticalA={() =>  setPopularMovies(sortAlphabetical(popularMovies, 1))}
          />
        </Box>
        <Row gutter={[16, 16]} justify="center">
          {getMovieCards(popularMovies)}
        </Row>

        <Box margin="35px 0 10px 0">
          <Row justify="center">
            <Heading2>Top Rated Movies</Heading2>
          </Row>
          <SortingCluster
            sortByRatingD={() => setTopMovies(sortByRating(topMovies, -1))}
            sortByRatingA={() => setTopMovies(sortByRating(topMovies, 1))}
            sortAlphabeticalD={() => setTopMovies(sortAlphabetical(topMovies, -1))}
            sortAlphabeticalA={() => setTopMovies(sortAlphabetical(topMovies, 1))}
          />
        </Box>
        <Row gutter={[16, 16]} justify="center">
          {getMovieCards(topMovies)}
        </Row>

        <Box margin="35px 0 10px 0">
          <Row justify="center">
            <Heading2>Now Playing</Heading2>
          </Row>
          <SortingCluster
            sortByRatingD={() => setNowPlayingMovies(sortByRating(nowPlayingMovies, -1))}
            sortByRatingA={() => setNowPlayingMovies(sortByRating(nowPlayingMovies, 1))}
            sortAlphabeticalD={() => setNowPlayingMovies(sortAlphabetical(nowPlayingMovies, -1))}
            sortAlphabeticalA={() => setNowPlayingMovies(sortAlphabetical(nowPlayingMovies, 1))}
          />
        </Box>
        <Row gutter={[16, 16]} justify="center">
          {getMovieCards(nowPlayingMovies)}
        </Row>
      </Layout>
    );
  }
};
