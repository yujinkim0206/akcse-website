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
      linkClassName: "text-base font-bold uppercase tracking-wide",
      activeClassName: "-skew-x-12",
      inactiveClassName: "skew-x-0",
    },
    mobile: {
      linkClassName: "text-2xl font-semibold uppercase",
      activeClassName: "-skew-x-12",
      inactiveClassName: "skew-x-0",
    },
  };

  const v = variants[variant];
  
  return (
    <>
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
    </>
  );
}
