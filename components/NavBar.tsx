"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import clsx from "clsx";
import SocialMediaIcons from "./SocialMediaIcons";
import EmailCopy from "./EmailCopy";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between px-6 py-6 lg:px-10">
      <Link href="/" className="">
        <Image src="/logo-nav.png" alt="AKCSE Logo" width={50} height={45} />
      </Link>

      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="hidden gap-8 lg:flex">
        <NavLinks variant="desktop" />
      </div>

      <div
        className={clsx(
          "absolute top-0 left-0 z-10 flex h-screen w-screen flex-col items-start justify-center gap-8 bg-white px-10 transition-opacity duration-300 ease-in-out lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex flex-col gap-6 text-2xl">
          <NavLinks variant="mobile" onLinkClick={() => setIsOpen(false)} />
        </div>
        <EmailCopy />
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
