import React, { useEffect, useState } from "react";
import { MovieCard } from "shared/organisms/MovieCard";
import { getMovieById } from "services/moviedb";
import { Row, Col, Layout } from "antd";
import { Texts } from "shared/atoms/Texts";
import { useParams } from "react-router-dom";

interface IMovieParams {
  id: string;
}

interface IMovieValues {
  id: string;
  title: string;
  genres: string[];
  description: string;
  poster: string;
  rating: string;
}

export const MovieInfoScreen = () => {
  const [movieInfo, setMovieInfo] = useState<IMovieValues | undefined>(
    undefined
  );
  const [isLoading, setLoading] = useState(true);
  const { Heading2 } = Texts;
  const { id } = useParams<IMovieParams>();

  useEffect(() => {
    const receiveMovies = async () => {
      setMovieInfo(await getMovieById(id));
      setLoading(false);
    };
    receiveMovies();
  }, []);
  console.log(movieInfo);
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
          <Heading2>{movieInfo?.title}</Heading2>
          <Heading2>
            {movieInfo?.genres.map((genre: any) => {
              return <p key={genre["id"]}>{genre["name"]}</p>;
            })}
          </Heading2>
          <Heading2>{movieInfo?.description}</Heading2>
          <Heading2>{movieInfo?.rating}</Heading2>
        </Row>
      </Layout>
    );
  }
};
