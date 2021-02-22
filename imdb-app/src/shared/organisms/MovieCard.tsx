import React from "react";
import "antd/dist/antd.css";
import { Card } from "shared/atoms/Card";
import { Image } from "shared/atoms/Image";
import { CardInfo } from "shared/molecules/CardInfo";
import { useHistory } from "react-router-dom";

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
  const goToMovie = (id: string) => {
    history.push(`/movie/${id}`)
  }

  return (
    <Card width="230px" onClick={()=>goToMovie(id)}>
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
  );
};
