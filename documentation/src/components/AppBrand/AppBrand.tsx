import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

function AppName({
  type,
  background,
}: {
  type?: string;
  background?: boolean;
}) {
  const getLocalStorage = () => {
    const myValue =
      localStorage.getItem("appBrand") !== null
        ? localStorage.getItem("appBrand")
        : "Brand1";

    if (myValue === myValue?.toLowerCase() || type === "lowercase") {
      return myValue ? myValue?.toLowerCase() : "brand1";
    }

    return myValue
      ? myValue.charAt(0).toUpperCase() + myValue.slice(1)
      : "Brand1";
  };

  return (
    <BrowserOnly>
      {() => (
        <span className={background ? "code-span" : ""}>
          {getLocalStorage()}
        </span>
      )}
    </BrowserOnly>
  );
}

export default AppName;
