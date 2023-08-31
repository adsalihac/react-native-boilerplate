import React from "react";
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function NpmInstall(): JSX.Element {
  const getBrandName = () => {
    const myValue = localStorage.getItem("appBrand") || "brand1";
    return myValue;
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
        <CodeBlock
          language="tsx"
          title="scripts/generate-environments.ts"
          showLineNumbers
        >{`export const fs = require('fs').promises;

export type Brands = '${getBrandName()}';
export type Platforms = 'android' | 'ios';
export type Environments = 'dev' | 'prod' | 'live';

interface BrandConfig {
  [key: string]: (config: ConfigType) => any;
}

const defaultEnvConfig = {
  RN_APP_BRAND: '',
  RN_APP_ID: '',
  RN_APP_NAME: '',
  RN_DISABLE_SECURITY: '',
  RN_SERVER_URI: '',
  RN_VERSION_SUFFIX: ''
};

type ConfigType = typeof defaultEnvConfig;

const brandConfig: BrandConfig = {
  ${getBrandName()}: (config: ConfigType) => ({
    ...config,
    RN_APP_BRAND: '${getBrandName()}',
    RN_APP_ID: {
      dev: 'com.${getAppName("lowercase")}',
      live: 'com.${getAppName("lowercase")}.live.${getBrandName()}'
    },
    RN_APP_NAME: '${getAppName("upperCase")}',
    RN_DISABLE_SECURITY: 'true',
    RN_SERVER_URI: 'https://api.${getBrandName()}.dev',
    RN_VERSION_SUFFIX: 'dev'
  })
};

interface EnvConfig {
  [key: string]: (config: any, env: any) => any;
}

const envConfig: EnvConfig = {
  dev: (config: any, _env: EnvConfig): any => ({
    ...config,
    RN_APP_ID: config.RN_APP_ID.dev,
    RN_APP_NAME: \`\${config.RN_APP_NAME} (Dev)\`\,
    RN_DISABLE_SECURITY: 'true',
    RN_SERVER_URI: 'https://api.${getBrandName()}.dev',
    RN_VERSION_SUFFIX: 'dev'
  }),
  live: (config: any, env: EnvConfig): any => ({
    ...env.prod(config, env),
    RN_APP_ID: config.RN_APP_ID.live,
    RN_APP_NAME: \`\${config.RN_APP_NAME}\`\,
    RN_SERVER_URI: 'https://api.${getBrandName()}.live',
    RN_VERSION_SUFFIX: 'live'
  }),
  prod: (config: any, env: EnvConfig): any => ({
    ...env.dev(config, env),
    RN_APP_NAME: \`\${config.RN_APP_NAME} (Prod)\`\,
    RN_DISABLE_SECURITY: 'false',
    RN_SERVER_URI: 'https://api.${getBrandName()}.prod',
    RN_VERSION_SUFFIX: 'prod'
  })
};

const generateEnv = async () => {
  for (const brand of Object.keys(brandConfig)) {
    await fs.mkdir(\`\env/\${brand}\`, { recursive: true });
    for (const env of Object.keys(envConfig)) {
      const envConfigs = envConfig[env](
        brandConfig[brand](defaultEnvConfig),
        envConfig
      );
   
      const envFile = Object.keys(envConfigs)
      .map((key) => \`\${key}=$\{envConfigs[key]}\`).join('\\n\');
      await fs.writeFile(\`\env/\${brand}/\${env}\`\, \`\${envFile}\\n\`\);
      console.log(\`\Generating env/\${brand}/\${env}\`);
    } 
  }
};

void generateEnv();`}</CodeBlock>
      )}
    </BrowserOnly>
  );
}
