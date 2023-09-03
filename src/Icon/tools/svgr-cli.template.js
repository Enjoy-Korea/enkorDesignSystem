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

  // componentName이 문자열인 것으로 확인되었으므로, 직접 slice 함수를 사용
  const IconComponentName = componentName.slice(3);

  return typeScriptTpl.ast`
    import React from 'react';
    import type { IconProps } from '../types';
    export const ${IconComponentName} = React.memo<IconProps>(({size = 24, fillColor = '#1B1C1D', className, style}) => ${jsx})
  `;
}

module.exports = defaultTemplate;
