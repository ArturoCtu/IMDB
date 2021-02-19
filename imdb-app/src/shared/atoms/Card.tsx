import styled, { CSSProp } from "styled-components";
import * as colors from "styles/base/colors";

type Sizes = "height" | "width";

type DefaultProps = Pick<CSSStyleDeclaration, Sizes>;

interface ICardProps {
  css?: CSSProp;
}

export const Card = styled.div<Partial<DefaultProps> & ICardProps>`
  background-color: ${colors.PRIMARY_COLOR};
  border-radius: 5px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  ${({ css }) => css}
`;
