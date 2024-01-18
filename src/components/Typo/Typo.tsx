import React, { HTMLAttributes, PropsWithChildren } from "react";

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
    h4: { size: "20px", lineHeight: "28px", weight: "600" },
    h5: { size: "18px", lineHeight: "24px", weight: "600" },
    h6: { size: "16px", lineHeight: "22px", weight: "600" },
  },
};

const createStyledHeading = (
  name: HeadingProps["name"],
  color: TextProps["color"],
) => styled.h1`
  font-size: ${baseHeadingStyle.desktop[name].size};
  line-height: ${baseHeadingStyle.desktop[name].lineHeight};
  font-weight: ${baseHeadingStyle.desktop[name].weight};

  color: ${color ?? grayScale.main};

  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: ${baseHeadingStyle.mobile[name].size};
    line-height: ${baseHeadingStyle.mobile[name].lineHeight};
    font-weight: ${baseHeadingStyle.mobile[name].weight};
  }
`;

export const Heading = ({
  name,
  color = grayScale.main,
  children,
  ...rest
}: HeadingProps) => {
  const StyledHeading = createStyledHeading(name, color);

  if (!StyledHeading) return null;

  return (
    <StyledHeading as={name} {...rest}>
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

const createStyledText = (
  name: TextProps["name"],
  color: TextProps["color"],
) => styled.p`
  font-size: ${commonTextStyle.desktop[name].size};
  line-height: ${commonTextStyle.desktop[name].lineHeight};
  font-weight: ${commonTextStyle.desktop[name].weight};

  color: ${color ?? grayScale.main};

  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: ${commonTextStyle.mobile[name].size};
    line-height: ${commonTextStyle.mobile[name].lineHeight};
    font-weight: ${commonTextStyle.mobile[name].weight};
  }
`;

export const Text = ({
  name,
  color,
  children,
  element = "p",
  ...rest
}: TextProps) => {
  const StyledText = createStyledText(name, color);

  if (!StyledText) return null;

  return (
    <StyledText as={element} {...rest}>
      {children}
    </StyledText>
  );
};

// ------------------------------------------------------------

/**
 *  @Heading desktop(데스크탑 환경)
 *    - h1: { size: 36px, lineHeight: 44px, weight: 700 }
 *    - h2: { size: 32px, lineHeight: 40px, weight: 700 }
 *    - h3: { size: 28px, lineHeight: 36px, weight: 700 }
 *    - h4: { size: 24px, lineHeight: 32px, weight: 600 }
 *    - h5: { size: 20px, lineHeight: 28px, weight: 600 }
 *    - h6: { size: 18px, lineHeight: 24px, weight: 600 }

 *  -------------------------------------------------------------------

 *  @Heading mobile(모바일 환경)
 *    - h1: { size: 32px, lineHeight: 40px, weight: 700 }
 *    - h2: { size: 28px, lineHeight: 36px, weight: 700 }
 *    - h3: { size: 24px, lineHeight: 32px, weight: 700 }
 *    - h4: { size: 22px, lineHeight: 28px, weight: 600 }
 *    - h5: { size: 18px, lineHeight: 24px, weight: 600 }
 *    - h6: { size: 16px, lineHeight: 22px, weight: 600 }
 * 
 *  -------------------------------------------------------------------
 * 
 *  @Text desktop(데스크탑 환경)
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
 *  @Text mobile(모바일 환경)
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

export const Typo = {
  Heading,
  Text,
};
