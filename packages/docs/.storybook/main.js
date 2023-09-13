import { dirname, join } from "path";
module.exports = {
  stories: [
    "../src/pages/introduction.stories.mdx",
    "../src/pages/get-started.stories.mdx",
    "../src/**/*.mdx",
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("storybook-tailwind-dark-mode"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  features: {
    storyStoreV7: true,
  },

  viteFinal: (config, { configType }) => {
    if(configType === 'PRODUCTION'){
      config.base = '/rubensdeoliveira-ui'
    }
    return config
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}