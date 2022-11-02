import { defaultTheme, defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { sidebar } from "./configs";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: "zh-CN",
  title: "Nodo.js笔记",
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@/, path.resolve(__dirname, "../code")),
    },
  },
  theme: defaultTheme({
    locales: {
      "/": {
        sidebar,
      },
    },
  }),
});
