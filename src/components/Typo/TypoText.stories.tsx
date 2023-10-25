import React from "react";

import { Text, TextProps } from "./Typo";

export const TypoText = (args: TextProps) => {
  return <Text {...args} />;
};

TypoText.args = {
  children: "TypoText",
  name: "m",
};

export default {
  title: "components/Typo",
  component: Text,
};
