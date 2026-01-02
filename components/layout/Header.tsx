"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import clsx from "clsx";
import AKCSEUofTHeaderSocial from "./AKCSEUofTHeaderSocial";
import EmailCopy from "./EmailCopy";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed sm:absolute inset-x-0 top-0 z-50 h-[var(--header-m)] sm:h-[var(--header)] bg-white">
      <div className="px-4 sm:px-6 flex h-full items-center justify-between">
        <Link href="/" className="relative w-40 h-auto">
          <Image src="/images/logo.png" alt="AKCSE Logo" width={2608} height={2067} className="w-[40px] sm:w-[45px] h-auto" sizes="(min-width: 640px) 45px, 40px" />
        </Link>

        {/* desktop */}
        <div className="hidden lg:block">
          <NavLinks variant="desktop" />
        </div>

        {/* mobile */}
        <div className="block lg:hidden">
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div
          className={clsx(
            "absolute top-0 left-0 z-50 flex h-screen w-screen flex-col items-start justify-center gap-8 bg-white px-10 transition-opacity duration-300 ease-in-out lg:hidden",
            isOpen ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <NavLinks variant="mobile" onLinkClick={() => setIsOpen(false)} />
          <EmailCopy />
          <AKCSEUofTHeaderSocial />
        </div>
      </div>
    </header>
  );
}
