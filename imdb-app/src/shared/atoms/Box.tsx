import styled, { CSSProp } from "styled-components";

type PaddingSet = "padding";
type MarginSet = "margin";
type Sizes =
  | "height"
  | "width"
  | "maxHeight"
  | "maxWidth"
  | "minHeight"
  | "minWidth";
type ContentAlign = "alignContent" | "textAlign";
type Positions = "position" | "top" | "bottom" | "left" | "right";

type DefaultProps = Pick<
  CSSStyleDeclaration,
  MarginSet | ContentAlign | PaddingSet | Sizes | Positions
>;

interface IBoxProps {
  css?: CSSProp;
}

export const Box = styled.div<Partial<DefaultProps> & IBoxProps>`
  position: ${({position}) => position};
  top: ${({top}) => top};
  bottom: ${({bottom}) => bottom};
  left: ${({left}) => left};
  right: ${({right}) => right};
  text-align: ${({ textAlign }) => textAlign};
  align-content: ${({ alignContent }) => alignContent};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};\
  box-sizing: border-box;
  ${({ css }) => css}
`;
