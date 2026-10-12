interface NavigationItem {
  label: string;
  href: string;
  available: boolean;
}

// Shared navigation order; only implemented destinations are exposed.
export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "/home", available: true },
  { label: "Experience", href: "/experience", available: true },
  { label: "Portfolio", href: "/portfolio", available: true },
  { label: "Ask Felicia AI", href: "/ask", available: true },
  { label: "Contact", href: "/contact", available: true },
];
