import pluginWebc from "@11ty/eleventy-plugin-webc";
import yaml from "js-yaml";

export default async function (config) {
  config.addPlugin(pluginWebc, {
    components: ["_components/**/*.webc", "_layouts/**/*.webc"],
  });

  config.addDataExtension("yaml", (contents) => yaml.load(contents));

  return {
    dir: {
      input: "src",
      layouts: "_layouts",
      output: ".eleventy",
    },
  };
}
