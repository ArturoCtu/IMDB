import React from "react";
import {Box} from "shared/atoms/Box";
import {Texts} from "shared/atoms/Texts";

interface ICardInfoProps {
  title: string;
  description: string;
}

export const CardInfo: React.FC<ICardInfoProps> = ({ title, description }) => {
  const { Heading4, Text1 } = Texts;
  return (
    <Box padding='10px'>
      <Heading4>{title}</Heading4>
      <Text1>{description}</Text1>

    </Box>
  );
};
