import styled, { CSSProp } from "styled-components";

interface IButtonProps {
  css?: CSSProp;
}

export const Button = styled.button<IButtonProps>`
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  margin: 3px 5px;
  ${({ css }) => css}
  &:hover {
    box-shadow: 6px 6px 13px 2px rgba(0, 0, 0, 0.1);
  }
`;
