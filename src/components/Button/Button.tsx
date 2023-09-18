import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  color: #515151;
  background-color: #ffd951;
  padding: 10px 20px;
  &:hover {
    background-color: #ffb801;
  }
`;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
}

export const Button = ({ label = "stay", children, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{children}</StyledButton>
);
