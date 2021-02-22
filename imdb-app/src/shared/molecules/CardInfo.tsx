import React from "react";
import { Box } from "shared/atoms/Box";
import { Texts } from "shared/atoms/Texts";
import { StarOutlined } from "@ant-design/icons"; 

interface ICardInfoProps {
  title: string;
  rating: string;
}

export const CardInfo: React.FC<ICardInfoProps> = ({ title, rating }) => {
  const { Heading4, Text1 } = Texts;
  return (
    <Box padding="10px" height="110px">
      <Heading4>{title.length <= 41 ? title : title.substring(0,38) + "..."}</Heading4>
      <Box position="absolute" bottom="0px" right="20px">
        <Text1>{rating} <StarOutlined /></Text1>
      </Box>
    </Box>
  );
};
