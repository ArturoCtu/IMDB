import styled, { CSSProp } from "styled-components";

interface IImageProps {
  css?: CSSProp;
}

export const Image = styled.img<IImageProps>`
  height: 100%;
  width: 100%;
  ${({ css }) => css}
`;
