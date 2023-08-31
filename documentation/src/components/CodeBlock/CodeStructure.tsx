import React from "react";
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from "@docusaurus/BrowserOnly";

import AppName from "../Appname/AppName";

export default function CodeStructure(): JSX.Element {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName") || "MyApp";
    return myValue ? myValue : "myapp";
  };

  return (
    <BrowserOnly>
      {() => (
        <CodeBlock language="command">
          <AppName />
          {`
├── mocks
├── .husky
├── .vscode
├── android
├── app
│   ├── api
│   ├── assets
│   ├── components
│   ├── constants
│   └── containers
│   └── context
│   └── modules
│   └── navigators
│   └── screens
│   └── stores
│   └── store
│   └── styles
│   └── translations
│   └── types
│   └── utils
│   └── app.tsx
├── coverage
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .node-version
├── .prettierignore
├── .prettierrc
├── .ruby-version
├── .unimportedrc.json
├── .watchmanconfig
├── app.json
├── babel.config.js
├── Gemfile
├── index.android.ts
├── index.common.js
├── index.ios.js
├── index.web.js
├── Jenkinsfile
├── metro.config.js
├── package-lock.json
├── package.json
├── react-native.config.js
├── README.md
├── renovate.json
├── tsconfig.json
├── tsconfig.spec.json
`}
        </CodeBlock>
      )}
    </BrowserOnly>
  );
}
