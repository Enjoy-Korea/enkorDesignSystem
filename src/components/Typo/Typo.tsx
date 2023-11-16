import React, { HTMLAttributes, PropsWithChildren, useMemo } from "react";

import styled from "styled-components";

import { ColorType } from "../../colors/types";
import { grayScale } from "../../colors";

// ------------------------------------------------------------

export interface HeadingProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
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

const createStyledHeading = (name: HeadingProps["name"]) => styled[name]`
  font-size: ${baseHeadingStyle.desktop[name].size};
  line-height: ${baseHeadingStyle.desktop[name].lineHeight};
  font-weight: ${baseHeadingStyle.desktop[name].weight};

  color: ${(props) => props.color || grayScale.main};

  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: ${baseHeadingStyle.mobile[name].size};
    line-height: ${baseHeadingStyle.mobile[name].lineHeight};
    font-weight: ${baseHeadingStyle.mobile[name].weight};
  }
`;

const StyledHeadings = {
  h1: createStyledHeading("h1"),
  h2: createStyledHeading("h2"),
  h3: createStyledHeading("h3"),
  h4: createStyledHeading("h4"),
  h5: createStyledHeading("h5"),
  h6: createStyledHeading("h6"),
};

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

export const Heading = ({
  name,
  color = grayScale.main,
  children,
  ...rest
}: HeadingProps) => {
  const StyledHeading = useMemo(() => StyledHeadings[name], [name]);

  if (!StyledHeading) return null;

  return (
    <StyledHeading color={color} {...rest}>
      {children}
    </StyledHeading>
  );
};

// ------------------------------------------------------------

export interface TextProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
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

const baseTextStyle = {
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

const createStyledText = (
  name: TextProps["name"],
  element: TextProps["element"],
  color: TextProps["color"],
) => styled[element as "span" | "p"]`
  font-size: ${baseTextStyle.desktop[name].size};
  line-height: ${baseTextStyle.desktop[name].lineHeight};
  font-weight: ${baseTextStyle.desktop[name].weight};

  color: ${color ?? grayScale.main};

  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: ${baseTextStyle.mobile[name].size};
    line-height: ${baseTextStyle.mobile[name].lineHeight};
    font-weight: ${baseTextStyle.mobile[name].weight};
  }
`;

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

export const Text = ({
  name,
  color,
  children,
  element = "p",
  ...rest
}: TextProps) => {
  const StyledText = useMemo(
    () => createStyledText(name, element, color),
    [name, element, color],
  );

  if (!StyledText) return null;

  return <StyledText {...rest}>{children}</StyledText>;
};

// ------------------------------------------------------------

export const Typo = {
  Heading,
  Text,
};
