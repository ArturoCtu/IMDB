import React, { useEffect, useState } from "react";
import { MovieCard } from "shared/organisms/MovieCard";
import { fetchMovies } from "services/moviedb";
import { Row, Col, Layout } from "antd";
import { Texts } from "shared/atoms/Texts";

export const HomeScreen = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
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

  const getMovieCards = (moviesArr: any[]) =>
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
      <Row justify="center">
        <Heading2>Loading...</Heading2>
      </Row>
    );
  } else {
    return (
      <Layout>
        <Row justify="center">
          <Heading2>Most Popular Movies</Heading2>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          {getMovieCards(popularMovies)}
        </Row>

        <Row justify="center">
          <Heading2>Top Rated Movies</Heading2>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          {getMovieCards(topMovies)}
        </Row>

        <Row justify="center">
          <Heading2>Now Playing</Heading2>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          {getMovieCards(nowPlayingMovies)}
        </Row>
      </Layout>
    );
  }
};
