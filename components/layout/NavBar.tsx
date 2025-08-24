"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import clsx from "clsx";
import AKCSEUofTHeaderSocial from "./AKCSEUofTHeaderSocial";
import EmailCopy from "./EmailCopy";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="wrap flex w-full items-center justify-between py-4">
      <Link href="/" className="">
        <Image src="/logo-nav.png" alt="AKCSE Logo" width={50} height={45} />
      </Link>

      {/* desktop */}
      <div className="hidden lg:block">
        <NavLinks variant="desktop" />
      </div>

      <div className="hidden lg:block">
        <SearchBar />
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={clsx(
          "absolute top-0 left-0 z-10 flex h-screen w-screen flex-col items-start justify-center gap-8 bg-white px-10 transition-opacity duration-300 ease-in-out lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <NavLinks variant="mobile" onLinkClick={() => setIsOpen(false)} />
        <EmailCopy />
        <AKCSEUofTHeaderSocial />
      </div>
    </nav>
  );
}
