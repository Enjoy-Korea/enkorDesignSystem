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

  return typeScriptTpl.ast`
    import React from 'react';
    import type { IconProps } from '../types';
    const ${IconComponentName}: React.FC<IconProps> = ({size = 24, fillColor = '#1B1C1D', className = '', style = {}}: IconProps) => ${jsx};
    export default ${IconComponentName};
`;
}

module.exports = defaultTemplate;
