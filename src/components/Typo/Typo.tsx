import React from "react";

import styled from "styled-components";

import type { ColorType } from "../../colors/types";

// ------------------------------------------------------------

export interface HeadingProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>> {
  name: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: ColorType;
}

const baseHeadingStyle = {
  desktop: {
    h1: { size: "36px", lineHeight: "44px", weight: "700" },
    h2: { size: "32px", lineHeight: "40px", weight: "700" },
    h3: { size: "28px", lineHeight: "36px", weight: "700" },
    h4: { size: "24px", lineHeight: "32px", weight: "600" },
    h5: { size: "20px", lineHeight: "28px", weight: "600" },
    h6: { size: "18px", lineHeight: "24px", weight: "600" },
  },
  mobile: {
    h1: { size: "32px", lineHeight: "40px", weight: "700" },
    h2: { size: "28px", lineHeight: "36px", weight: "700" },
    h3: { size: "24px", lineHeight: "32px", weight: "700" },
    h4: { size: "22px", lineHeight: "28px", weight: "600" },
    h5: { size: "18px", lineHeight: "24px", weight: "600" },
    h6: { size: "16px", lineHeight: "22px", weight: "600" },
  },
};

const StyledHeading = styled.h1<{
  name: keyof typeof baseHeadingStyle.desktop;
}>`
  margin: 0;
  color: ${({ color }) =>
    color ??
    "var(--default-color)"}; // TODO: --default-color 없을 때 fallback(#515151) 정의 필요
  font-weight: ${({ name }) => baseHeadingStyle.desktop[name].weight};
  font-size: ${({ name }) => baseHeadingStyle.desktop[name].size};
  line-height: ${({ name }) => baseHeadingStyle.desktop[name].lineHeight};

  @media screen and (max-width: 1024px) {
    font-weight: ${({ name }) => baseHeadingStyle.mobile[name].weight};
    font-size: ${({ name }) => baseHeadingStyle.mobile[name].size};
    line-height: ${({ name }) => baseHeadingStyle.mobile[name].lineHeight};
  }
`;

export const Heading = ({ name, color, children, ...rest }: HeadingProps) => {
  if (!name) return null;
  return (
    <StyledHeading as={name} color={color} name={name} {...rest}>
      {children}
    </StyledHeading>
  );
};

// ------------------------------------------------------------

export interface TextProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  name:
    | "strongM"
    | "strongS"
    | "l"
    | "spacedM"
    | "m"
    | "spacedS"
    | "s"
    | "xs"
    | "xxs";
  color?: ColorType;
  element?: "span" | "p";
}

const commonTextStyle = {
  desktop: {
    strongM: { size: "16px", lineHeight: "22px", weight: "600" },
    strongS: { size: "14px", lineHeight: "20px", weight: "600" },
    spacedM: { size: "16px", lineHeight: "26px", weight: "400" },
    spacedS: { size: "14px", lineHeight: "22px", weight: "400" },
    l: { size: "18px", lineHeight: "30px", weight: "400" },
    m: { size: "16px", lineHeight: "22px", weight: "400" },
    s: { size: "14px", lineHeight: "20px", weight: "400" },
    xs: { size: "12px", lineHeight: "16px", weight: "400" },
    xxs: { size: "10px", lineHeight: "14px", weight: "400" },
  },
  mobile: {
    strongM: { size: "16px", lineHeight: "22px", weight: "600" },
    strongS: { size: "14px", lineHeight: "20px", weight: "600" },
    spacedM: { size: "16px", lineHeight: "26px", weight: "400" },
    spacedS: { size: "14px", lineHeight: "22px", weight: "400" },
    l: { size: "16px", lineHeight: "26px", weight: "400" },
    m: { size: "16px", lineHeight: "22px", weight: "400" },
    s: { size: "14px", lineHeight: "20px", weight: "400" },
    xs: { size: "12px", lineHeight: "16px", weight: "400" },
    xxs: { size: "10px", lineHeight: "14px", weight: "400" },
  },
};

const StyledText = styled.p<{ name: keyof typeof commonTextStyle.desktop }>`
  margin: 0;
  white-space: pre-wrap;
  color: ${({ color }) => color ?? "var(--default-color)"};
  font-weight: ${({ name }) => commonTextStyle.desktop[name].weight};
  font-size: ${({ name }) => commonTextStyle.desktop[name].size};
  line-height: ${({ name }) => commonTextStyle.desktop[name].lineHeight};

  @media screen and (max-width: 1024px) {
    font-weight: ${({ name }) => commonTextStyle.mobile[name].weight};
    font-size: ${({ name }) => commonTextStyle.mobile[name].size};
    line-height: ${({ name }) => commonTextStyle.mobile[name].lineHeight};
  }
`;

export const Text = ({
  name,
  color,
  children,
  element = "p",
  ...rest
}: TextProps) => {
  if (!name) return null;
  return (
    <StyledText as={element} name={name} color={color} {...rest}>
      {children}
    </StyledText>
  );
};

//-------------------------------------------------------------------

export const Typo = {
  /**
 * 
 * \@Heading desktop(데스크탑 환경)
 * ```
 *    - h1: { size: 36px, lineHeight: 44px, weight: 700 }
 *    - h2: { size: 32px, lineHeight: 40px, weight: 700 }
 *    - h3: { size: 28px, lineHeight: 36px, weight: 700 }
 *    - h4: { size: 24px, lineHeight: 32px, weight: 600 }
 *    - h5: { size: 20px, lineHeight: 28px, weight: 600 }
 *    - h6: { size: 18px, lineHeight: 24px, weight: 600 }
 * ```
 *  -------------------------------------------------------------------

 * \@Heading mobile(모바일 환경)
 * ```
 *    - h1: { size: 32px, lineHeight: 40px, weight: 700 }
 *    - h2: { size: 28px, lineHeight: 36px, weight: 700 }
 *    - h3: { size: 24px, lineHeight: 32px, weight: 700 }
 *    - h4: { size: 22px, lineHeight: 28px, weight: 600 }
 *    - h5: { size: 18px, lineHeight: 24px, weight: 600 }
 *    - h6: { size: 16px, lineHeight: 22px, weight: 600 }
 * ```
   */
  Heading,

  /**
   *
   * \@Text desktop(데스크탑 환경)
   * ```
   *    - strongM: { size: 16px, lineHeight: 22px, weight: 600 }
   *    - strongS: { size: 14px, lineHeight: 20px, weight: 600 }
   *    - spacedM: { size: 16px, lineHeight: 26px, weight: 400 }
   *    - spacedS: { size: 14px, lineHeight: 22px, weight: 400 }
   *    - l: { size: 18px, lineHeight: 30px, weight: 400 }
   *    - m: { size: 16px, lineHeight: 22px, weight: 400 }
   *    - s: { size: 14px, lineHeight: 20px, weight: 400 }
   *    - xs: { size: 12px, lineHeight: 16px, weight: 400 }
   *    - xxs: { size: 10px, lineHeight: 14px, weight: 400 }
   * ```
   *  -------------------------------------------------------------------
   *
   * \@Text mobile(모바일 환경)
   * ```
   *    - strongM: { size: 16px, lineHeight: 22px, weight: 600 }
   *    - strongS: { size: 14px, lineHeight: 20px, weight: 600 }
   *    - spacedM: { size: 16px, lineHeight: 26px, weight: 400 }
   *    - spacedS: { size: 14px, lineHeight: 22px, weight: 400 }
   *    - l: { size: 16px, lineHeight: 26px, weight: 400 }
   *    - m: { size: 16px, lineHeight: 22px, weight: 400 }
   *    - s: { size: 14px, lineHeight: 20px, weight: 400 }
   *    - xs: { size: 12px, lineHeight: 16px, weight: 400 }
   *    - xxs: { size: 10px, lineHeight: 14px, weight: 400 }
   * ```
   */
  Text,
};
