import React, { useEffect, useState } from "react";
import { getMovieById } from "services/moviedb";
import { Row, Layout } from "antd";
import { Texts } from "shared/atoms/Texts";
import { useParams } from "react-router-dom";
import { Image } from "shared/atoms/Image";
import { Box } from "shared/atoms/Box";
import { TagFilled, StarFilled, ClockCircleOutlined } from "@ant-design/icons";

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
  duration: number;
}

export const MovieInfoScreen = () => {
  const [movieInfo, setMovieInfo] = useState<IMovieValues | undefined>(
    undefined
  );
  const [isLoading, setLoading] = useState(true);
  const { Heading2, Text1 } = Texts;
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
        <Image
          src={movieInfo?.poster}
          aria-label={movieInfo?.title + " poster"}
          css={`
            max-height: 70vh;
          `}
        />
        <Row justify="center">
          <Box margin="20px 30px">
            <Heading2>{movieInfo?.title}</Heading2>
          </Box>
        </Row>

        <Row justify="center">
          {movieInfo?.genres.map((genre: any) => {
            return (
              <Box key={genre["id"]} margin="0 8px">
                <Text1>
                  <TagFilled />
                  {" " + genre["name"]}
                </Text1>
              </Box>
            );
          })}
        </Row>

        <Row justify="center">
          <Box margin="20px 30px">
            <Text1>{movieInfo?.description}</Text1>
          </Box>
        </Row>

        <Row justify="end">
          <Box margin="30px 30px 30px 0px">
            <Heading2>
              {movieInfo?.duration + "min"} <ClockCircleOutlined />{" "}
            </Heading2>
          </Box>
          <Box margin="30px 30px 30px 0px">
            <Heading2>
              {movieInfo?.rating} <StarFilled />{" "}
            </Heading2>
          </Box>
        </Row>
      </Layout>
    );
  }
};
