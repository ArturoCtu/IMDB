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
  border: 1px solid #dee2e6;
  box-shadow: 2px 2px 13px 2px rgba(0,0,0,0.15);
  min-height: 252px; 
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  ${({ css }) => css}
  &:hover {
    box-shadow: 6px 6px 13px 2px rgba(0,0,0,0.3);
  }
  
`;
