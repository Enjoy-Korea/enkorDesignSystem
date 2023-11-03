const { template: babelTemplate } = require("@babel/core");

function defaultTemplate(api, opts, state) {
  const { componentName, jsx } = api;

  if (!componentName || !jsx) {
    console.error("Something is undefined:", {
      componentName,
      jsx,
    });
    return;
  }

  const typeScriptTpl = babelTemplate.smart({ plugins: ["jsx", "typescript"] });

  const IconComponentName = componentName.slice(3).endsWith("Icon")
    ? componentName.slice(3)
    : componentName.slice(3) + "Icon";

  // Find all path and circle elements
  const elementsToModify = jsx.children.filter(
    (child) =>
      child.type === "JSXElement" &&
      (child.openingElement.name.name === "path" ||
        child.openingElement.name.name === "circle"),
  );

  // Update stroke attribute for each path and circle element
  elementsToModify.forEach((element) => {
    element.openingElement.attributes =
      element.openingElement.attributes.filter(
        (attribute) => !(attribute.name && attribute.name.name === "stroke"),
      );

    element.openingElement.attributes.push({
      type: "JSXAttribute",
      name: {
        type: "JSXIdentifier",
        name: "stroke",
      },
      value: {
        type: "JSXExpressionContainer",
        expression: {
          type: "Identifier",
          name: "strokeColor",
        },
      },
    });
  });

  return typeScriptTpl.ast`
    import React from "react";
    import type { IconProps } from "../types";
    
    export const ${IconComponentName} = ({
      size = 24,
      fillColor = "none",
      strokeColor = "#515151",
      className = "",
      style = {},
      viewBox = "0 0 24 24"
    }: IconProps) => ${jsx};
  `;
}

module.exports = defaultTemplate;
