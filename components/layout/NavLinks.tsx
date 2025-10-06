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
      linkClassName: "text-md tracking-tighter transition-colors duration-200 hover:text-[var(--hover-black)]",
      activeClassName: "-skew-x-12",
      inactiveClassName: "skew-x-0",
    },
    mobile: {
      container: "flex flex-col gap-3",
      linkClassName: "text-2xl transition-colors duration-200 hover:text-[var(--hover-black)]",
      activeClassName: "-skew-x-12",
      inactiveClassName: "skew-x-0",
    },
  };

  const v = variants[variant];

  const isLinkActive = (href: string) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <nav className={v.container}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            v.linkClassName,
            isLinkActive(link.href) ? v.activeClassName : v.inactiveClassName,
          )}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
