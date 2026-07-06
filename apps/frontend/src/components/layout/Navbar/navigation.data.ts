export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "AI Pipeline",
    href: "/pipeline",
  },
  {
    label: "Documentation",
    href: "/docs",
  },
];