import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";
import AppName from "../AppName/AppName";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function NpmInstall(): JSX.Element {
  const getBrandName = () => {
    const myValue = localStorage.getItem("appBrand") || "brand1";
    return myValue;
  };

  return (
    <BrowserOnly>
      {() => (
        <CodeBlock>
          <AppName />
          {`
├──env
│   ├── ${getBrandName()}
│       ├── dev
│       ├── live
│       └── prod
`}
        </CodeBlock>
      )}
    </BrowserOnly>
  );
}
