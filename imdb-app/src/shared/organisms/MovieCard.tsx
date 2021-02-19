import React from "react";
import "antd/dist/antd.css";
import { Card } from "shared/atoms/Card";
import { Image } from "shared/atoms/Image";
import { CardInfo } from "shared/molecules/CardInfo";

export const MovieCard = () => {
  return (
    <Card width="210px">
      <Image
        src="https://images-na.ssl-images-amazon.com/images/I/91Lpv1aIkmL._AC_SL1500_.jpg"
        aria-label=""
        css={`
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        `}
      />
      <CardInfo
        title="The Avengers"
        description="This movie was written by..."
      />
    </Card>
  );
};
