import React from "react";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/client";
import CodeBlock from "@theme/CodeBlock";

const docsPluginId = undefined; // Default docs plugin instance

function PackageJson() {
  const latestVersion = useLatestVersion(docsPluginId);
  const allVersions = useVersions(docsPluginId);
  // Only happens in deploy preview / local dev, but still nice
  const versionName =
    latestVersion.name === "current" && allVersions.length > 1
      ? allVersions[1]!.name
      : latestVersion.name;
  return (
    <CodeBlock language="json" title="package.json">{`{
  "dependencies": {
    "@docusaurus/core": "${versionName}",
    "@docusaurus/preset-classic": "${versionName}",
    // ...
  }
}`}</CodeBlock>
  );
}

export default function NpmInstall(): JSX.Element {
  return (
    <>
      <PackageJson />
    </>
  );
}
