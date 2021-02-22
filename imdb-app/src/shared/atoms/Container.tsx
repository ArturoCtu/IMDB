import styled, { CSSProp } from "styled-components";

interface IContainerProps {
  css?: CSSProp;
}

export const Container = styled.div<IContainerProps>`
  margin:  50px;
  width: 100%;
  ${({ css }) => css}
`;
