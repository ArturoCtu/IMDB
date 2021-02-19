import styled, { CSSProp } from 'styled-components';

type PaddingSet = 'padding';
type MarginSet = 'margin';
type Sizes = 'height' | 'width' | 'maxHeight' | 'maxWidth' | 'minHeight' | 'minWidth';

type DefaultProps = Pick<
  CSSStyleDeclaration,
  | MarginSet
  | PaddingSet
  | Sizes
>;

interface IBoxProps {
  css?: CSSProp;
}

export const Box = styled.div<Partial<DefaultProps> & IBoxProps>`
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  ${({ css }) => css}
`;
