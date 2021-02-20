import React, { useEffect, useState } from "react";
import { Container } from "shared/atoms/Container";
import { MovieCard } from "shared/organisms/MovieCard";
import { fetchMovies } from "services/moviedb";
import { Row, Col } from "antd";

export const HomeScreen = () => {
  const [showMovies, setShowMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const receiveMovies = async () => {
      setShowMovies(await fetchMovies());
      setLoading(false);
    };
    receiveMovies();
  }, []);

  const topRated = showMovies.map((movie, index) => {
    return (
      <Col>
        <MovieCard
          title={movie["title"]}
          description={movie["description"]}
          poster={movie["poster"]}
        />
      </Col>
    );
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (

        <Row gutter={[16, 16]} justify="center">{topRated}</Row>

    );
  }
};
