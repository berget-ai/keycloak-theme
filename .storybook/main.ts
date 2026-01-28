import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [],
    framework: {
        name: "@storybook/react-vite",
        options: {
            builder: {
                viteConfigPath: undefined
            }
        }
    },
    staticDirs: ["../public"],
    // For GitHub Pages deployment
    viteFinal: async config => {
        // Set base path for GitHub Pages if GITHUB_REPOSITORY is set
        if (process.env.GITHUB_REPOSITORY) {
            const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
            config.base = `/${repo}/`;
        }
        return config;
    }
};
export default config;
