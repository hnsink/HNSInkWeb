import { defineSidebarConfig } from "vuepress-theme-hope";

export const zh = defineSidebarConfig({
  "/zh/": [
    "welcome/", 
    {
      text: "公告",
      // icon: "bullhorn",
      prefix: "info/notice/",
      children: ["notice1"],
    },
    {
      // icon: "lightbulb",
      text: "使用指南",
      prefix: "guide/",
      // link: "guide/",
      children: ["syber-connect"],
    },
    {
      text: "动态",
      // icon: "circle-info",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsable: true,
      prefix: "info/news/",
      children: ["news1"],
    },
    {
      text: "FAQ",
      // icon: "circle-info", 
      collapsable: true,
      prefix: "info/faq/",
      children: "structure",
    },
    {
      text: "Q&A",
      // icon: "circle-info", 
      collapsable: true,
      prefix: "info/qa/",
      children: "structure",
    },
    {
      text: "路线图",
      // icon: "circle-info", 
      collapsable: true,
      prefix: "info/roadmap/",
      children: "structure",
    },
  ],
});
