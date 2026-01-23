import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

// Apply dark mode class to document
document.documentElement.classList.add("dark");

// Remove Storybook's default max-width constraint and apply dark theme
const style = document.createElement("style");
style.innerHTML = `
  /* Storybook layout overrides - console-inspired deep black background */
  .sb-main-padded {
    max-width: none !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    background: hsl(0 0% 4%) !important;
  }

  /* For centered layout stories, add padding, grid, and center content */
  .sb-main-padded:has([data-layout="centered"]) {
    padding: 2rem !important;
    background: hsl(0 0% 4%) !important;
    background-image:
      linear-gradient(to bottom, rgba(229, 221, 213, 0.02) 1px, transparent 1px),
      linear-gradient(to right, rgba(229, 221, 213, 0.02) 1px, transparent 1px) !important;
    background-size: 24px 24px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
  }

  .sb-show-main {
    background: hsl(0 0% 4%) !important;
    width: 100% !important;
    max-width: none !important;
  }

  #storybook-root {
    width: 100% !important;
    max-width: none !important;
    min-height: 100vh !important;
    background: hsl(0 0% 4%);
    color: hsl(0 0% 100%);
  }

  /* Fullscreen layout - no padding, but keep dark background from component */
  .sb-main-padded:has([data-layout="fullscreen"]) {
    padding: 0 !important;
    background: transparent !important;
  }

  /* Font families */
  body, .sb-show-main, #storybook-root {
    font-family: 'DM Sans', sans-serif !important;
    color: hsl(0 0% 100%) !important;
  }

  h1, h2, h3 {
    font-family: 'Ovo', serif !important;
    color: hsl(0 0% 100%) !important;
  }
`;
document.head.appendChild(style);

const preview: Preview = {
    parameters: {
        layout: "centered", // Default layout for all stories
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            default: "berget-dark",
            values: [
                {
                    name: "berget-dark",
                    value: "transparent"
                }
            ]
        },
        darkMode: "dark" // Enable dark mode by default
    },

    globalTypes: {
        darkMode: {
            name: "Dark Mode",
            description: "Toggle dark mode",
            defaultValue: true,
            toolbar: {
                icon: "circlehollow",
                items: [
                    { value: true, icon: "circlehollow", title: "Dark" },
                    { value: false, icon: "circle", title: "Light" }
                ]
            }
        }
    },

    initialGlobals: {
        darkMode: true
    }
};

export default preview;
