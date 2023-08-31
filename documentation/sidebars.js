// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "get-started/requirements",
        "get-started/installation",
        "get-started/configuration/configuration",
        "get-started/scripts/scripts",
        "get-started/codeSigning/codeSigning",
        "get-started/typescript",
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "guides/assets",
        "guides/constants",
        "guides/themes",
        "guides/components",
        "guides/splashScreen",
        "guides/screens",
        "guides/navigation",
        "guides/redux",
        "guides/language",
      ],
    },
    {
      type: "category",
      label: "Developer Tools",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "developerTools/introduction",
        "developerTools/flipper",
        "developerTools/unitTesting",
        "developerTools/jenkins",
        "developerTools/storybook",
      ],
    },
    "security/security",
    "tips",
    "troubleshooting",
  ],
};

module.exports = sidebars;
