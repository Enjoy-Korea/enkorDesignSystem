import React, { HTMLAttributes, PropsWithChildren } from "react";
import { ColorType } from "../../colors/types";
export interface HeadingProps extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
    name: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    color?: ColorType;
}
/**
 *  - desktop(데스크탑 환경)
 *    - h1: { size: 36px, lineHeight: 44px, weight: 700 }
 *    - h2: { size: 32px, lineHeight: 40px, weight: 700 }
 *    - h3: { size: 28px, lineHeight: 36px, weight: 700 }
 *    - h4: { size: 24px, lineHeight: 32px, weight: 600 }
 *    - h5: { size: 20px, lineHeight: 28px, weight: 600 }
 *    - h6: { size: 18px, lineHeight: 24px, weight: 600 }

 *  -------------------------------------------------------------------
 *  - mobile(모바일 환경)
 *    - h1: { size: 32px, lineHeight: 40px, weight: 700 }
 *    - h2: { size: 28px, lineHeight: 36px, weight: 700 }
 *    - h3: { size: 24px, lineHeight: 32px, weight: 700 }
 *    - h4: { size: 22px, lineHeight: 28px, weight: 600 }
 *    - h5: { size: 18px, lineHeight: 24px, weight: 600 }
 *    - h6: { size: 16px, lineHeight: 22px, weight: 600 }
 */
export declare const Heading: ({ name, color, children, ...rest }: HeadingProps) => React.JSX.Element | null;
export interface TextProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
    name: "strongM" | "strongS" | "l" | "spacedM" | "m" | "spacedS" | "s" | "xs" | "xxs";
    color?: ColorType;
    element?: "span" | "p";
}
/**
 *  - desktop(데스크탑 환경)
 *    - strongM: { size: 16px, lineHeight: 22px, weight: 600 }
 *    - strongS: { size: 14px, lineHeight: 20px, weight: 600 }
 *    - spacedM: { size: 16px, lineHeight: 26px, weight: 400 }
 *    - spacedS: { size: 14px, lineHeight: 22px, weight: 400 }
 *    - l: { size: 18px, lineHeight: 30px, weight: 400 }
 *    - m: { size: 16px, lineHeight: 22px, weight: 400 }
 *    - s: { size: 14px, lineHeight: 20px, weight: 400 }
 *    - xs: { size: 12px, lineHeight: 16px, weight: 400 }
 *    - xxs: { size: 10px, lineHeight: 14px, weight: 400 }
 *
 *  -------------------------------------------------------------------
 *
 *  - mobile(모바일 환경)
 *    - strongM: { size: 16px, lineHeight: 22px, weight: 600 }
 *    - strongS: { size: 14px, lineHeight: 20px, weight: 600 }
 *    - spacedM: { size: 16px, lineHeight: 26px, weight: 400 }
 *    - spacedS: { size: 14px, lineHeight: 22px, weight: 400 }
 *    - l: { size: 16px, lineHeight: 26px, weight: 400 }
 *    - m: { size: 16px, lineHeight: 22px, weight: 400 }
 *    - s: { size: 14px, lineHeight: 20px, weight: 400 }
 *    - xs: { size: 12px, lineHeight: 16px, weight: 400 }
 *    - xxs: { size: 10px, lineHeight: 14px, weight: 400 }
 */
export declare const Text: ({ name, color, children, element, ...rest }: TextProps) => React.JSX.Element | null;
export declare const Typo: {
    Heading: ({ name, color, children, ...rest }: HeadingProps) => React.JSX.Element | null;
    Text: ({ name, color, children, element, ...rest }: TextProps) => React.JSX.Element | null;
};
