export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Books",
  description: "Make beautiful books.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],
  navMenuItems: [
    {
      label: "Books",
      href: "/books",
    },
  ],
  links: {
    github: "https://github.com/windmaomao/book-collection",
    books: "https://windmaomao.github.io/book-collection/",
  },
};
