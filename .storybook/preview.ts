import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

// Remove Storybook's default max-width constraint and set font
const style = document.createElement("style");
style.innerHTML = `
  .sb-main-padded {
    max-width: none !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    background: transparent !important;
  }
  
  .sb-show-main {
    background: hsl(0 0% 10%) !important;
    width: 100% !important;
    max-width: none !important;
  }
  
  #storybook-root {
    width: 100% !important;
    max-width: none !important;
    min-height: 100vh !important;
  }
  
  body, .sb-show-main {
    font-family: 'DM Sans', sans-serif !important;
  }
  
  h1, h2, h3 {
    font-family: 'Ovo', serif !important;
  }
`;
document.head.appendChild(style);

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            options: {
                "berget-dark": {
                    name: "berget-dark",
                    value: "transparent"
                }
            }
        }
    },

    initialGlobals: {
        backgrounds: {
            value: "berget-dark"
        }
    }
};

export default preview;
