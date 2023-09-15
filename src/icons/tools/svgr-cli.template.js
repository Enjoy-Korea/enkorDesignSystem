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

  const IconComponentName = componentName.slice(3);

  const pathElement = jsx.children.find(
    (child) =>
      child.type === "JSXElement" && child.openingElement.name.name === "path"
  );

  if (pathElement) {
    // Remove existing 'stroke' attribute
    pathElement.openingElement.attributes =
      pathElement.openingElement.attributes.filter(
        (attribute) => !(attribute.name && attribute.name.name === "stroke")
      );

    // Add a new JSXAttribute for stroke
    pathElement.openingElement.attributes.push({
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
  }

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
