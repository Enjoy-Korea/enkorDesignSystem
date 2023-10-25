import React from "react";

import { Button } from "./Button";

export default {
  title: "components/Button",
  component: Button,
};

export const button = () => {
  return <Button>button test</Button>;
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button>primary button test</Button>;
};
