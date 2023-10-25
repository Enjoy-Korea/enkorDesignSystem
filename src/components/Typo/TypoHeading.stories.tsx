import React from "react";

import { Heading, HeadingProps } from "./Typo";

export const TypoHeading = (args: HeadingProps) => {
  return <Heading {...args} />;
};

TypoHeading.args = {
  children: "TypoHeading",
  name: "h1",
};

export default {
  title: "components/Typo",
  component: Heading,
};
