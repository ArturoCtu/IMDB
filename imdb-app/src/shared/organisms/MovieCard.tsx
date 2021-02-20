import React from "react";
import "antd/dist/antd.css";
import { Card } from "shared/atoms/Card";
import { Image } from "shared/atoms/Image";
import { CardInfo } from "shared/molecules/CardInfo";

interface IMovieCardProps {
 title: string;
 description: string;
 poster: string;
}

export const MovieCard: React.FC<IMovieCardProps> = ({ title, description, poster }) => {
  return (
    <Card width="230px">
      <Image
        src={poster}
        aria-label={`${title} Poster`}
        css={`
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        `}
      />
      <CardInfo
        title={title}
        description={description}
      />
    </Card>
  );
};
