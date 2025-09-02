"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Members", href: "/members" },
  { name: "Events", href: "/events" },
  { name: "Research & Literature", href: "/research" },
];

export default function NavLinks({
  variant = "desktop",
  onLinkClick,
}: {
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();

  const variants = {
    desktop: {
      container: "flex gap-8",
      linkClassName: "text-sm font-medium tracking-tighter transition-colors duration-300 hover:text-gray-400",
      activeClassName: "-skew-x-12",
      inactiveClassName: "skew-x-0",
    },
    mobile: {
      container: "flex flex-col gap-6",
      linkClassName: "text-2xl font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-gray-400",
      activeClassName: "-skew-x-12",
      inactiveClassName: "skew-x-0",
    },
  };

  const v = variants[variant];

  return (
    <nav className={v.container}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            v.linkClassName,
            pathname === link.href ? v.activeClassName : v.inactiveClassName,
          )}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
