import React, { HTMLAttributes, ReactNode } from "react";
import { grayScale, yellow, blue, red, orange, green } from "../../colors";
export type ColorType = (typeof grayScale)[keyof typeof grayScale] | (typeof yellow)[keyof typeof yellow] | (typeof blue)[keyof typeof blue] | (typeof red)[keyof typeof red] | (typeof orange)[keyof typeof orange] | (typeof green)[keyof typeof green];
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode | string;
    name: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    color?: ColorType;
}
export declare const Heading: ({ name, color, children, ...rest }: HeadingProps) => React.JSX.Element;
export interface TextProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode | string;
    name: "strongM" | "strongS" | "l" | "spacedM" | "m" | "spacedS" | "s" | "xs" | "xxs";
    color?: ColorType;
    element?: "span" | "p";
}
export declare const Text: ({ name, color, children, element, ...rest }: TextProps) => React.JSX.Element;
export declare const Typo: {
    Heading: ({ name, color, children, ...rest }: HeadingProps) => React.JSX.Element;
    Text: ({ name, color, children, element, ...rest }: TextProps) => React.JSX.Element;
};
