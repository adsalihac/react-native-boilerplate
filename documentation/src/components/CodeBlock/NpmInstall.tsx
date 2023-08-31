import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function NpmInstall(): JSX.Element {
  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appName") || "MyApp";
    return myValue ? myValue : "MyApp";
  };

  return (
    <BrowserOnly>
      {() => (
        <CodeBlock language="command">{`npx react-native init ${getLocalStorage()} --template @adsalihac/react-native-boilerplate`}</CodeBlock>
      )}
    </BrowserOnly>
  );
}
