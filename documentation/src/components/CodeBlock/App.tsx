import React from "react";
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function NpmInstall(): JSX.Element {
  const getBrandName = (type: string) => {
    const myValue = localStorage.getItem("appBrand") || "brand1";

    return type === "lowerCase"
      ? myValue?.toLowerCase()
      : myValue
      ? myValue.charAt(0).toUpperCase() + myValue.slice(1)
      : "Brand1";
  };

  const getAppName = (type: string) => {
    const myValue =
      localStorage.getItem("appName") !== null
        ? localStorage.getItem("appName")
        : "MyApp";

    if (myValue === myValue?.toLowerCase() || type === "lowercase") {
      return myValue ? myValue?.toLowerCase() : "myapp";
    }

    return myValue ? myValue : "MyApp";
  };

  return (
    <BrowserOnly>
      {() => (
        <>
          <CodeBlock
            language="tsx"
            showLineNumbers
          >{`import Router${getBrandName(
            "upperCase"
          )} from 'app/navigators/brand1/router';

<SafeAreaProvider style={styles.container}>
    {config.RN_APP_BRAND === '${getBrandName(
      "lowerCase"
    )}' && <Router${getBrandName("upperCase")} />}
</SafeAreaProvider>
`}</CodeBlock>
        </>
      )}
    </BrowserOnly>
  );
}
