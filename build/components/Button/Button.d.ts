import React from "react";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label?: string;
    onClick?: () => void;
}
declare const Button: ({ label, children, ...rest }: ButtonProps) => React.JSX.Element;
export default Button;
