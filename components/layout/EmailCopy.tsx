"use client";

import { useState } from "react";
import clsx from "clsx";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "akcse.utoronto@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={copyToClipboard}
        className="cursor-pointer transition-opacity duration-300 hover:opacity-75"
      >
        {email}
      </button>
      <span
        className={clsx(
          "absolute top-1/2 left-full ml-2 -translate-y-1/2 rounded bg-black px-2 py-1 text-sm text-white transition-all duration-200 ease-out",
          copied ? "opacity-100" : "opacity-0",
        )}
      >
        Copied!
      </span>
    </div>
  );
}
