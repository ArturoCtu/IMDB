import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card } from "shared/atoms/Card";
import { Box } from "shared/atoms/Box";
import { Texts } from "shared/atoms/Texts";
import { RED, WHITE } from "styles/base/colors";
import { Image } from "shared/atoms/Image";
import { CardInfo } from "shared/molecules/CardInfo";
import { useHistory } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

interface IMovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: string;
}

export const MovieCard: React.FC<IMovieCardProps> = ({
  id,
  title,
  poster,
  rating,
}) => {
  const history = useHistory();
  const [isFavorite, setFavorite] = useState(Boolean(localStorage.getItem(id)));
  const goToMovie = (id: string) => {
    history.push(`/movie/${id}`);
  };
  const { Heading3 } = Texts;

  const handleFav = (movieId: string) => {
    localStorage.setItem(movieId, "true");
    setFavorite(true);
  };
  const handleUnFav = (movieId: string) => {
    localStorage.removeItem(movieId);
    setFavorite(false);
  };

  return (
    <Box>
      <Box position="absolute" right="15px">
        <Heading3>
          {isFavorite ? (
            <HeartFilled
              style={{ color: RED }}
              onClick={() => handleUnFav(id)}
            />
          ) : (
            <HeartOutlined
              style={{ color: WHITE }}
              onClick={() => handleFav(id)}
            />
          )}
        </Heading3>
      </Box>
      <Card width="230px" onClick={() => goToMovie(id)}>
        <Image
          src={poster}
          aria-label={`${title} Poster`}
          css={`
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          `}
        />
        <CardInfo title={title} rating={`Rating: ${rating}/10`} />
      </Card>
    </Box>
  );
};
