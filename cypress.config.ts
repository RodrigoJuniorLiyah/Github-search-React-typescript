import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

module.exports = {
  projectId: "svxw9m",
  e2e: {
    baseUrl: "http://localhost:3000",
  },
};
