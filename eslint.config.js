import eslintPluginNode from "eslint-plugin-node";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    plugins: {
      node: eslintPluginNode,
    },
  },
];
