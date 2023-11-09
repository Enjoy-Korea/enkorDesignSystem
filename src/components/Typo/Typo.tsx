import React, { HTMLAttributes, PropsWithChildren } from "react";

import styled from "styled-components";

import { ColorType } from "../../colors/types";
import { grayScale } from "../../colors";

export interface HeadingProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  name: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: ColorType;
}

export const Heading = ({
  name,
  color = grayScale.main,
  children,
  ...rest
}: HeadingProps) => {
  const filterHeadingStyle = {
    h1: {
      size: "36px",
      lineHeight: "44px",
      weight: "700",
    },
    h2: {
      size: "32px",
      lineHeight: "40px",
      weight: "700",
    },
    h3: {
      size: "28px",
      lineHeight: "36px",
      weight: "700",
    },
    h4: {
      size: "24px",
      lineHeight: "32px",
      weight: "600",
    },
    h5: {
      size: "20px",
      lineHeight: "28px",
      weight: "600",
    },
    h6: {
      size: "18px",
      lineHeight: "24px",
      weight: "600",
    },
  };

  const filterMobileHeadingStyle = {
    h1: {
      size: "32px",
      lineHeight: "40px",
      weight: "700",
    },
    h2: {
      size: "28px",
      lineHeight: "36px",
      weight: "700",
    },
    h3: {
      size: "24px",
      lineHeight: "32px",
      weight: "700",
    },
    h4: {
      size: "22px",
      lineHeight: "28px",
      weight: "600",
    },
    h5: {
      size: "18px",
      lineHeight: "24px",
      weight: "600",
    },
    h6: {
      size: "16px",
      lineHeight: "22px",
      weight: "600",
    },
  };

  const StyledHeading = styled[name]`
    font-size: ${filterHeadingStyle[name].size};
    line-height: ${filterHeadingStyle[name].lineHeight};
    font-weight: ${filterHeadingStyle[name].weight};
    color: ${color};
    margin: 0;

    @media screen and (max-width: 1024px) {
      font-size: ${filterMobileHeadingStyle[name].size};
      line-height: ${filterMobileHeadingStyle[name].lineHeight};
      font-weight: ${filterMobileHeadingStyle[name].weight};
    }
  `;

  return <StyledHeading {...rest}>{children}</StyledHeading>;
};

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

export const Text = ({
  name,
  color,
  children,
  element = "p",
  ...rest
}: TextProps) => {
  const filterTextStyle = {
    strongM: {
      size: "16px",
      lineHeight: "22px",
      weight: "600",
    },
    strongS: {
      size: "14px",
      lineHeight: "20px",
      weight: "600",
    },
    l: {
      size: "18px",
      lineHeight: "30px",
      weight: "400",
    },
    spacedM: {
      size: "16px",
      lineHeight: "26px",
      weight: "400",
    },
    m: {
      size: "16px",
      lineHeight: "22px",
      weight: "400",
    },
    spacedS: {
      size: "14px",
      lineHeight: "22px",
      weight: "400",
    },
    s: {
      size: "14px",
      lineHeight: "20px",
      weight: "400",
    },
    xs: {
      size: "12px",
      lineHeight: "16px",
      weight: "400",
    },
    xxs: {
      size: "10px",
      lineHeight: "14px",
      weight: "400",
    },
  };

  const filterMobileTextStyle = {
    strongM: {
      size: "16px",
      lineHeight: "22px",
      weight: "600",
    },
    strongS: {
      size: "14px",
      lineHeight: "20px",
      weight: "600",
    },
    l: {
      size: "16px",
      lineHeight: "26px",
      weight: "400",
    },
    spacedM: {
      size: "16px",
      lineHeight: "26px",
      weight: "400",
    },
    m: {
      size: "16px",
      lineHeight: "22px",
      weight: "400",
    },
    spacedS: {
      size: "14px",
      lineHeight: "22px",
      weight: "400",
    },
    s: {
      size: "14px",
      lineHeight: "20px",
      weight: "400",
    },
    xs: {
      size: "12px",
      lineHeight: "16px",
      weight: "400",
    },
    xxs: {
      size: "10px",
      lineHeight: "14px",
      weight: "400",
    },
  };

  const StyledText = styled[element]`
    font-size: ${filterTextStyle[name].size};
    line-height: ${filterTextStyle[name].lineHeight};
    font-weight: ${filterTextStyle[name].weight};
    color: ${color};
    margin: 0;
    
    @media screen and (max-width: 1024px) {
      font-size: ${filterMobileTextStyle[name].size};
      line-height: ${filterMobileTextStyle[name].lineHeight};
      font-weight: ${filterMobileTextStyle[name].weight};
    }
  `;

  return <StyledText {...rest}>{children}</StyledText>;
};

export const Typo = {
  Heading,
  Text,
};
