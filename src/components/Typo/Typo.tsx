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

const desktopHeadingStyle = {
  h1: { size: "36px", lineHeight: "44px", weight: "700" },
  h2: { size: "32px", lineHeight: "40px", weight: "700" },
  h3: { size: "28px", lineHeight: "36px", weight: "700" },
  h4: { size: "24px", lineHeight: "32px", weight: "600" },
  h5: { size: "20px", lineHeight: "28px", weight: "600" },
  h6: { size: "18px", lineHeight: "24px", weight: "600" },
};

const mobileHeadingStyle = {
  h1: { size: "32px", lineHeight: "40px", weight: "700" },
  h2: { size: "28px", lineHeight: "36px", weight: "700" },
  h3: { size: "24px", lineHeight: "32px", weight: "700" },
  h4: { size: "22px", lineHeight: "28px", weight: "600" },
  h5: { size: "18px", lineHeight: "24px", weight: "600" },
  h6: { size: "16px", lineHeight: "22px", weight: "600" },
};

const createStyledHeading = ({
  heading,
  element,
}: {
  heading: HeadingProps["name"];
  element: HeadingProps["name"];
}) => styled[element]`
  font-size: ${desktopHeadingStyle[heading].size};
  line-height: ${desktopHeadingStyle[heading].lineHeight};
  font-weight: ${desktopHeadingStyle[heading].weight};

  color: ${(props) => props.color || grayScale.main};

  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: ${mobileHeadingStyle[heading].size};
    line-height: ${mobileHeadingStyle[heading].lineHeight};
    font-weight: ${mobileHeadingStyle[heading].weight};
  }
`;

export const Heading = ({
  name,
  color = grayScale.main,
  children,
  ...rest
}: HeadingProps) => {
  const StyledHeading = createStyledHeading({ heading: name, element: name });
  // eslint-disable-next-line no-console
  console.log(`headingTest-${name}`, children);
  if (!StyledHeading) return null;

  return (
    <StyledHeading color={color} {...rest} id="test-heading-1">
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

const desktopTextStyle = {
  strongM: { size: "16px", lineHeight: "22px", weight: "600" },
  strongS: { size: "14px", lineHeight: "20px", weight: "600" },
  spacedM: { size: "16px", lineHeight: "26px", weight: "400" },
  spacedS: { size: "14px", lineHeight: "22px", weight: "400" },
  l: { size: "18px", lineHeight: "30px", weight: "400" },
  m: { size: "16px", lineHeight: "22px", weight: "400" },
  s: { size: "14px", lineHeight: "20px", weight: "400" },
  xs: { size: "12px", lineHeight: "16px", weight: "400" },
  xxs: { size: "10px", lineHeight: "14px", weight: "400" },
};

const mobileTextStyle = {
  strongM: { size: "16px", lineHeight: "22px", weight: "600" },
  strongS: { size: "14px", lineHeight: "20px", weight: "600" },
  spacedM: { size: "16px", lineHeight: "26px", weight: "400" },
  spacedS: { size: "14px", lineHeight: "22px", weight: "400" },
  l: { size: "16px", lineHeight: "26px", weight: "400" },
  m: { size: "16px", lineHeight: "22px", weight: "400" },
  s: { size: "14px", lineHeight: "20px", weight: "400" },
  xs: { size: "12px", lineHeight: "16px", weight: "400" },
  xxs: { size: "10px", lineHeight: "14px", weight: "400" },
};

const createStyledText = (
  name: TextProps["name"],
  element: TextProps["element"],
  color: TextProps["color"],
) => styled[element as "span" | "p"]`
  font-size: ${desktopTextStyle[name].size};
  line-height: ${desktopTextStyle[name].lineHeight};
  font-weight: ${desktopTextStyle[name].weight};

  color: ${color ?? grayScale.main};

  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: ${mobileTextStyle[name].size};
    line-height: ${mobileTextStyle[name].lineHeight};
    font-weight: ${mobileTextStyle[name].weight};
  }
`;

export const Text = ({
  name,
  color,
  children,
  element = "p",
  ...rest
}: TextProps) => {
  const StyledText = createStyledText(name, element, color);
  // eslint-disable-next-line no-console
  console.log(`textTest-${name}`, children);
  if (!StyledText) return null;

  return <StyledText {...rest}>{children}</StyledText>;
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
