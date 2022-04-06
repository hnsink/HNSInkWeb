import { defineNavbarConfig } from "vuepress-theme-hope";

export const en = defineNavbarConfig([
  "/", 
  { text: "ecosystem", icon: "group-arrows-rotate", link: "/ecosystem" },
  { text: "community", icon: "people-group", link: "/community" },
  // { text: "DAO", icon: "building-columns", link: "/dao" },
  { text: "develope", icon: "layer-group", link: "/develope" },
  { text: "Guide", icon: "lightbulb", link: "/guide/" },
  {
    text: "Info",
    icon: "rss",
    // link: "/info/",
    // prefix: "/info/", 
    children: [
      { text: "All", icon: "square-rss", link: "/info/" },
      {
        text: "notice", 
        prefix: "/info/notice/",
        children: [
          { text: "Notice 1", icon: "bullhorn", link: "notice1" },
        ],
      },
      {
        text: "news", 
        prefix: "/info/news/",
        children: [
          { text: "News 1", icon: "circle-info", link: "news1" },
        ],
      }, 
      { text: "FAQ", link: "/category/faq/" },
      { text: "Q&A", link: "/category/q&a/" }, 
    ],
  },
  {
    text: "🚀Launch", 
    // icon: "rocket",
    link: "https://app.hns.ink",
  },
]);
