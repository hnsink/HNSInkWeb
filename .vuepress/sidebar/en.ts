import { defineSidebarConfig } from "vuepress-theme-hope";

export const en = defineSidebarConfig({
  "/": [
    "welcome/", 
    {
      text: "notice",
      // icon: "bullhorn",
      prefix: "info/notice/",
      children: ["notice1"],
    },
    {
      // icon: "lightbulb",
      text: "Guide",
      prefix: "guide/",
      // link: "guide/",
      children: ["syber-connect"],
    },
    {
      text: "news",
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
      text: "RoadMap",
      // icon: "circle-info", 
      collapsable: true,
      prefix: "info/roadmap/",
      children: "structure",
    },
  ],
});
